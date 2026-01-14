"use client";

import { Button } from "@/components/ui/button";
import { ExpoBackground } from "@/components/expo-background";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <ExpoBackground />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">Exponiel</span>
            <span className="text-foreground"> — цифровая платформа для выставок и деловых поездок</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto"
          >
            Единая система для организаторов и участников: бронирование стендов и билетов,
            коммуникация, аналитика и планирование командировок.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-brand-green hover:bg-brand-green-dark text-white text-lg px-12 py-7 transition-colors font-semibold rounded-full shadow-lg hover:shadow-xl"
            >
              Стать партнером
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
