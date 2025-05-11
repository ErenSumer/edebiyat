"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightClassName?: string;
}

export default function AnimatedText({ 
  text, 
  className = "", 
  highlightClassName = "" 
}: AnimatedTextProps) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.4
      }
    })
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        staggerChildren: 0.03
      }
    })
  };

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-2"
          initial="hidden"
          animate="visible"
          custom={wordIndex}
          variants={wordVariants}
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className={letterIndex % 3 === 0 ? highlightClassName : ""}
              custom={letterIndex}
              variants={letterVariants}
              style={{
                display: "inline-block",
                willChange: "transform"
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </span>
  );
}