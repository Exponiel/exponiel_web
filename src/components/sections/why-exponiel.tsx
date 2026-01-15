"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, TrendingUp, Puzzle, Shield } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Создан на основе реального опыта",
    description: "Мы сами участвовали в выставках и знаем все болевые точки",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: TrendingUp,
    title: "Подходит для B2B-мероприятий",
    description: "Специально разработан для отраслевых выставок и деловых событий",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Puzzle,
    title: "Гибко адаптируется",
    description: "Подстраивается под разные форматы выставок и процессы организаторов",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Не вмешивается в финансовые потоки",
    description: "Организаторы сохраняют полный контроль над своими процессами",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
];

export function WhyExponielSection() {
  return (
    <section className="py-24 relative section-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Почему <span className="text-gradient">Exponiel</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full card-glass hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full ${reason.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${reason.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl text-muted-foreground italic">
            Exponiel — это не замена организаторам, а инфраструктура, которая
            упрощает их работу.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
