"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, BookOpen, School, Award } from "lucide-react";

export default function Importance() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const points = [
    {
      title: "Kültürel Miras",
      description: "Türkçe, Türk milletinin kültür mirasının taşıyıcısıdır. Dilin doğru kullanımı, bu mirasın korunması ve gelecek nesillere aktarılması için önemlidir.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Düşünce Yapısı",
      description: "Dil, düşünce yapımızı şekillendirir. Zengin ve doğru bir Türkçe kullanımı, düşünce derinliğini ve yaratıcılığı artırır.",
      icon: <School className="w-5 h-5" />
    },
    {
      title: "İletişim Kalitesi",
      description: "Doğru ve etkili dil kullanımı, iletişim kalitesini artırarak anlaşmazlıkları azaltır ve toplumsal bağları güçlendirir.",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section 
      id="importance" 
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-cyan-950/20 z-0" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/5 to-transparent" />
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left column with image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative rounded-lg overflow-hidden border border-cyan-500/20">
                <img 
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Türkçe yazı ve kitaplar" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Dilimiz Kimliğimizdir</h4>
                  <p className="text-gray-300">Türkçe'nin doğru kullanımı, kültürel kimliğimizin korunmasında önemli rol oynar.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column with content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="text-sm md:text-base uppercase tracking-wider text-cyan-400 mb-3">
                Dilimizi Koruyalım
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Doğru Türkçe Kullanımının Önemi
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Sosyal medyada Türkçe'nin hızlı ve özensiz kullanımı, dilin yapısına zarar vermekte ve nesiller arası iletişimi zorlaştırmaktadır. Doğru ve özenli dil kullanımı, toplumsal ve kültürel açıdan büyük önem taşır.
              </p>
              
              <div className="space-y-6">
                {points.map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
                  >
                    <div className="mr-4 mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{point.title}</h4>
                      <p className="text-gray-300">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="mt-8 p-4 border border-cyan-600/30 rounded-lg bg-cyan-950/20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-cyan-200 italic">
                  "Türkçemizi korumak, sadece bir dili değil, bir düşünce ve kültür sistemini korumak demektir."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}