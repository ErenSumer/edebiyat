"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Instagram, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-2">
                Türkçe<span className="text-cyan-400">.io</span>
              </h2>
              <p className="text-gray-400">
                Sosyal medyada Türkçe'nin yolculuğunu ve önemini anlatan interaktif bir platform.
              </p>
            </motion.div>
            
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Sosyal Medya'nın Etkisi
                </a>
              </li>
              <li>
                <a href="#importance" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Doğru Kullanım
                </a>
              </li>
              <li>
                <a href="#statistics" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  İstatistikler
                </a>
              </li>
              <li>
                <a href="#examples" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Örnekler
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Çözümler
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            
            
          </motion.div>
        </div>
        
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Türkçe.io — Tüm hakları saklıdır.
          </p>
          
          <p className="text-gray-400 flex items-center">
            <span className="mr-2">Türkçe ile</span>
            <Heart className="h-4 w-4 text-red-500 mr-2" />
            <span>yapılmıştır</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}