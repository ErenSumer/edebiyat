"use client";

import { ReactNode } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  baseSpeed?: number;
  rotationFactor?: number;
}

export default function FloatingElement({
  children,
  className = "",
  baseSpeed = 2,
  rotationFactor = 1
}: FloatingElementProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    // Random starting position
    const startY = Math.random() * 10 - 5;
    const startX = Math.random() * 10 - 5;
    const startRotate = Math.random() * 10 - 5;

    // Create a random floating animation
    const floatAnimation = async () => {
      while (true) {
        const yMovement = 15 + Math.random() * 10;
        const xMovement = 10 + Math.random() * 5;
        const duration = baseSpeed + Math.random() * 1.5;
        
        await controls.start({
          y: startY + yMovement,
          x: startX + xMovement,
          rotate: startRotate + (5 * rotationFactor),
          transition: {
            duration,
            ease: "easeInOut"
          }
        });
        
        await controls.start({
          y: startY - yMovement,
          x: startX - xMovement,
          rotate: startRotate - (5 * rotationFactor),
          transition: {
            duration: duration + 0.5,
            ease: "easeInOut"
          }
        });
      }
    };

    floatAnimation();
  }, [baseSpeed, controls, rotationFactor]);

  return (
    <motion.div 
      className={className}
      animate={controls}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ transformOrigin: "center" }}
    >
      {children}
    </motion.div>
  );
}