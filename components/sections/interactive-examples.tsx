"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InteractiveExamples() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [selectedExample, setSelectedExample] = useState<number | null>(null);

  const examples = [
    {
      incorrect: "slm nbr nasilsin",
      correct: "Selam, ne haber? Nasılsın?",
      explanation: "Kısaltmalar ve noktalama işaretlerinin olmaması anlamayı zorlaştırır ve dilin yapısını bozar.",
      category: "Kısaltmalar",
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30"
    },
    {
      incorrect: "bunu beğendim cok nice",
      correct: "Bunu çok beğendim, güzelmiş.",
      explanation: "İngilizce 'nice' kelimesi yerine Türkçe karşılığı tercih edilmelidir.",
      category: "Yabancı Kelimeler",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30"
    },
    {
      incorrect: "bugun cok happy yim",
      correct: "Bugün çok mutluyum.",
      explanation: "Türkçe cümle içinde İngilizce kelime kullanımı ve Türkçe ek getirme dil kirliliğine yol açar.",
      category: "Dil Karışımı",
      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30"
    },
    {
      incorrect: "ok boomer anlamıosun bizi",
      correct: "Bizi anlamıyorsun.",
      explanation: "İngilizce kalıpların Türkçeye karışması ve yazım yanlışları iletişimi zorlaştırır.",
      category: "İnternet Jargonu",
      color: "from-teal-500/20 to-green-500/20 border-teal-500/30"
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id="examples" 
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-purple-950/20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-base uppercase tracking-wider text-cyan-400 mb-3">
            Örneklerle İnceleyelim
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            İnteraktif Örnekler
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Sosyal medyada sıkça karşılaşılan yanlış kullanımlar ve doğru karşılıklarını inceleyin. Kartlara tıklayarak detaylı açıklamaları görebilirsiniz.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {examples.map((example, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "rounded-xl p-6 border backdrop-blur-sm bg-gradient-to-br cursor-pointer transition-all",
                example.color,
                selectedExample === index ? "ring-2 ring-white/50" : ""
              )}
              onClick={() => setSelectedExample(index)}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(0, 255, 255, 0.2)"
              }}
              layout
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-black/30 text-cyan-300 border border-cyan-500/30">
                  {example.category}
                </span>
                <div className="text-cyan-400">
                  <Info className="h-5 w-5" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Yanlış Kullanım:</h4>
                  <p className="text-lg text-red-300">"{example.incorrect}"</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Doğru Kullanım:</h4>
                  <p className="text-lg text-green-300">"{example.correct}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedExample !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedExample(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              
              <motion.div
                className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-xl p-6 max-w-lg w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <button
                  onClick={() => setSelectedExample(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  {examples[selectedExample].category}
                </h3>
                
                <div className="space-y-6 mb-6">
                  <div className="p-4 bg-red-950/30 border border-red-500/30 rounded-lg">
                    <h4 className="text-sm text-gray-400 mb-1">Yanlış Kullanım:</h4>
                    <p className="text-xl text-red-300">"{examples[selectedExample].incorrect}"</p>
                  </div>
                  
                  <div className="p-4 bg-green-950/30 border border-green-500/30 rounded-lg">
                    <h4 className="text-sm text-gray-400 mb-1">Doğru Kullanım:</h4>
                    <p className="text-xl text-green-300">"{examples[selectedExample].correct}"</p>
                  </div>
                </div>
                
                <div className="bg-blue-950/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-sm text-gray-300 mb-2">Açıklama:</h4>
                  <p className="text-gray-300">{examples[selectedExample].explanation}</p>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedExample(null)}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
                  >
                    Kapat
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}