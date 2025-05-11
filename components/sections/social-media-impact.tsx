"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, MessageCircle, Zap, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SocialMediaImpact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const cards = [
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "Mesajlaşma Dili",
      description: "Sosyal medyada hızlı iletişim ihtiyacı, kısaltmalar ve yeni kelime türetme tekniklerini doğurdu.",
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
      delay: 0.1
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Hızlı Tüketim",
      description: "Düşünmeden yazma alışkanlığı, dil bilgisi kurallarına uyulmamasına neden oluyor.",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      delay: 0.3
    },
    {
      icon: <Languages className="h-10 w-10" />,
      title: "Yabancı Kelimeler",
      description: "İngilizce başta olmak üzere yabancı dillerin Türkçe'ye etkisi sosyal medyada daha belirgin.",
      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
      delay: 0.5
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Emoji Kültürü",
      description: "Yazılı ifadelerin yerini emoji ve GIF'ler alarak yeni bir anlatım dili oluşturuyor.",
      color: "from-teal-500/20 to-green-500/20 border-teal-500/30",
      delay: 0.7
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay
      }
    })
  };

  return (
    <section 
      id="impact" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-purple-950/20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-base uppercase tracking-wider text-cyan-400 mb-3">
            Dijital Dönüşüm
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Sosyal Medya'nın Türkçe'ye Etkisi
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Sosyal medya platformları, dilin kullanımı ve gelişimi üzerinde benzeri görülmemiş bir etki yaratıyor. Bu dönüşümün olumlu ve olumsuz yönlerini inceleyelim.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={card.delay}
              variants={itemVariants}
              className={cn(
                "rounded-xl p-6 border backdrop-blur-sm bg-gradient-to-br",
                card.color
              )}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(0, 255, 255, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-cyan-400 mb-4">{card.icon}</div>
              <h4 className="text-xl font-semibold mb-3 text-white">{card.title}</h4>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-6 border border-cyan-500/20 rounded-xl bg-gradient-to-br from-black to-blue-950/30 backdrop-blur-sm"
        >
          <h4 className="text-2xl font-semibold mb-4 text-white">Yeni Nesil İletişim</h4>
          <p className="text-gray-300">
            Sosyal medya, gençlerin dil kullanımını şekillendirirken, kelimelerin yazılışı ve anlamları da değişime uğruyor. "Merhaba" yerine "mrb", "nasılsın" yerine "nbr" gibi kısaltmalar artık günlük dilde yerini aldı. Emojilerin ve GIF'lerin sık kullanımı, yazılı ifadeyi daha az önemli hale getiriyor. Bu durum, hızlı iletişimin getirileri olmakla birlikte, Türkçe'nin doğru kullanımını da tehdit ediyor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}