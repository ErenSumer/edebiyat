"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/ui/animated-text";
import FloatingElement from "@/components/ui/floating-element";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="hero" 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FloatingElement 
          className="absolute top-20 left-[10%]"
          baseSpeed={1.5}
          rotationFactor={0.5}
        >
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-md border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-transparent backdrop-blur-sm" />
        </FloatingElement>

        <FloatingElement 
          className="absolute top-40 right-[15%]"
          baseSpeed={2}
          rotationFactor={0.8}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-purple-500/30 bg-gradient-to-br from-purple-950/40 to-transparent backdrop-blur-sm" />
        </FloatingElement>

        <FloatingElement 
          className="absolute bottom-32 left-[20%]"
          baseSpeed={1.8}
          rotationFactor={0.6}
        >
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-lg rotate-45 border border-blue-500/30 bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm" />
        </FloatingElement>
      </div>

      {/* Hero content */}
      <motion.div 
        className="container mx-auto px-6 z-20 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl text-cyan-400 font-light mb-4">
            Dijital Çağda
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <AnimatedText
              text="Sosyal Medyada Türkçe'nin Yolculuğu"
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
              highlightClassName="text-white"
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Dilin dijital dünyada geçirdiği dönüşümü keşfedin. Sosyal medyanın Türkçe üzerindeki etkilerini, değişimleri ve geleceğe dair öngörüleri interaktif bir deneyimle sunuyoruz.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <motion.a
              href="#impact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Keşfet
            </motion.a>
            <motion.a
              href="#statistics"
              className="px-8 py-3 bg-transparent border border-cyan-500/50 rounded-md text-cyan-400 font-medium hover:bg-cyan-950/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              İstatistikler
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <div className="w-8 h-14 rounded-full border-2 border-cyan-500/50 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-3 bg-cyan-400 rounded-full"
            animate={{ 
              y: [0, 6, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}