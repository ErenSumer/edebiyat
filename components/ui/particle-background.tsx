"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  initialX: number;
  initialY: number;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimationControls();
  const particlesRef = useRef<Particle[]>([]);
  const mouseXRef = useRef<number | null>(null);
  const mouseYRef = useRef<number | null>(null);

  // Generate initial particles
  useEffect(() => {
    if (!containerRef.current) return;
    
    const colors = [
      "rgba(0, 255, 255, 0.4)",  // Cyan
      "rgba(157, 78, 221, 0.4)",  // Purple
      "rgba(0, 183, 255, 0.4)",   // Blue
      "rgba(98, 0, 234, 0.3)",    // Deep Purple
      "rgba(0, 234, 179, 0.3)"    // Teal
    ];
    
    const generateParticles = () => {
      const particles: Particle[] = [];
      const density = window.innerWidth < 768 ? 20 : 40;
      
      for (let i = 0; i < density; i++) {
        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({
          id: i,
          x,
          y,
          size,
          color,
          initialX: x,
          initialY: y
        });
      }
      
      particlesRef.current = particles;
    };
    
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mouseXRef.current = ((e.clientX - rect.left) / rect.width) * 100;
      mouseYRef.current = ((e.clientY - rect.top) / rect.height) * 100;
    };
    
    const handleMouseLeave = () => {
      mouseXRef.current = null;
      mouseYRef.current = null;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    let animationFrame: number;
    
    const animateParticles = () => {
      if (!containerRef.current || !particlesRef.current.length) return;
      
      particlesRef.current.forEach(particle => {
        const el = document.getElementById(`particle-${particle.id}`);
        if (!el) return;
        
        let newX = particle.initialX;
        let newY = particle.initialY;
        
        // Apply mouse interaction if mouse is over the container
        if (mouseXRef.current !== null && mouseYRef.current !== null) {
          const distX = mouseXRef.current - particle.initialX;
          const distY = mouseYRef.current - particle.initialY;
          const distance = Math.sqrt(distX * distX + distY * distY);
          
          // Repel particles from mouse
          if (distance < 30) {
            const force = (30 - distance) / 30;
            newX = particle.initialX - (distX * force * 0.5);
            newY = particle.initialY - (distY * force * 0.5);
          }
        }
        
        // Apply movement with slight randomness
        newX += (Math.random() - 0.5) * 0.2;
        newY += (Math.random() - 0.5) * 0.2;
        
        // Keep particles within bounds
        newX = Math.max(0, Math.min(100, newX));
        newY = Math.max(0, Math.min(100, newY));
        
        el.style.left = `${newX}%`;
        el.style.top = `${newY}%`;
        
        // Update particle position
        particle.x = newX;
        particle.y = newY;
      });
      
      animationFrame = requestAnimationFrame(animateParticles);
    };
    
    animateParticles();
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      {particlesRef.current.map(particle => (
        <div
          key={particle.id}
          id={`particle-${particle.id}`}
          className="absolute rounded-full opacity-70 filter blur-[1px]"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}
    </div>
  );
}