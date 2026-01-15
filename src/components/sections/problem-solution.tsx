"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const currentProblems = [
  "Стенды — в Excel-файлах",
  "Коммуникация — через почту и мессенджеры",
  "Расчёты — вручную",
  "Документы — в разных письмах",
  "Аналитика — отсутствует или разрозненная",
];

const exponielSolutions = [
  "Интерактивная карта стендов",
  "Прозрачные цены и статусы заявок",
  "Чат и документы в одном окне",
  "Централизованная аналитика",
  "Понятный процесс для всех сторон",
];

export function ProblemSolutionSection() {
  return (
    <section className="py-24 relative section-accent">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Проблема и <span className="text-gradient">решение</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Как сейчас */}
          <motion.div
            initial={{ opacity: 0, rotateY: -15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-destructive/10 border border-destructive/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-destructive" />
              Как это выглядит сейчас
            </h3>
            <ul className="space-y-4">
              {currentProblems.map((problem, index) => (
                <li key={index} className="text-muted-foreground">
                  {problem}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Как с Exponiel */}
          <motion.div
            initial={{ opacity: 0, rotateY: 15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary/10 border border-primary/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-primary" />
              Как это работает с Exponiel
            </h3>
            <ul className="space-y-4">
              {exponielSolutions.map((solution, index) => (
                <li key={index}>
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
