"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, BookOpen, Users, School, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const solutions = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Farkındalık Kampanyaları",
      description: "Sosyal medya platformlarında Türkçe'nin doğru kullanımına yönelik farkındalık kampanyaları düzenlenmelidir.",
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
      delay: 0.1
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Eğitim İçerikleri",
      description: "Eğlenceli ve ilgi çekici içeriklerle gençlere doğru Türkçe kullanımı öğretilmelidir.",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      delay: 0.3
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Topluluk Oluşturma",
      description: "Sosyal medyada doğru Türkçe kullanımını destekleyen topluluklar oluşturulmalıdır.",
      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
      delay: 0.5
    },
    {
      icon: <School className="h-8 w-8" />,
      title: "Okullarda Bilinçlendirme",
      description: "Öğrencilere sosyal medyada doğru dil kullanımının önemi anlatılmalıdır.",
      color: "from-teal-500/20 to-green-500/20 border-teal-500/30",
      delay: 0.7
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Fark Et",
      description: "Sosyal medyada dilimizi nasıl kullandığımızın farkına varalım."
    },
    {
      number: "02",
      title: "Düzelt",
      description: "Yanlış alışkanlıklarımızı düzeltmek için bilinçli çaba gösterelim."
    },
    {
      number: "03",
      title: "Paylaş",
      description: "Doğru kullanımı çevremizle paylaşarak yayılmasını sağlayalım."
    },
    {
      number: "04",
      title: "Örnek Ol",
      description: "Sosyal medyada doğru Türkçe kullanımıyla başkalarına örnek olalım."
    }
  ];

  return (
    <section 
      id="solutions" 
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-base uppercase tracking-wider text-cyan-400 mb-3">
            Neler Yapabiliriz?
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Çözüm Önerileri
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Sosyal medyada Türkçe'nin doğru kullanımını teşvik etmek için yapılabilecek çalışmalar ve bireysel sorumluluklar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: solution.delay }}
              className={cn(
                "rounded-xl p-6 border backdrop-blur-sm bg-gradient-to-br",
                solution.color
              )}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(0, 255, 255, 0.2)"
              }}
            >
              <div className="flex items-start md:items-center mb-4 flex-col md:flex-row">
                <div className="p-3 rounded-lg bg-black/30 mb-4 md:mb-0 md:mr-4 text-cyan-400">
                  {solution.icon}
                </div>
                <h4 className="text-xl font-semibold text-white">{solution.title}</h4>
              </div>
              <p className="text-gray-300">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-black to-blue-950/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8"
        >
          <h4 className="text-2xl font-semibold mb-8 text-center text-white">
            Bireysel Adımlar
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 h-full">
                  <span className="block text-3xl font-bold text-cyan-400 mb-3">
                    {step.number}
                  </span>
                  <h5 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h5>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-cyan-500 h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a 
            href="#" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md text-white font-medium text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Harekete Geç
          </a>
        </motion.div>
      </div>
    </section>
  );
}