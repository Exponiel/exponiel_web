"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { LayoutGrid, Map, BarChart3, Calendar, Search, Sparkles } from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Управление выставками",
    description: "Полный контроль над всеми аспектами организации выставки",
    screenshot: "/screenshots/booth-view.png",
  },
  {
    icon: Map,
    title: "Онлайн-карта стендов",
    description: "Интерактивная карта с визуализацией и бронированием стендов",
    screenshot: "/screenshots/booth-view.png",
  },
  {
    icon: BarChart3,
    title: "Аналитика по выставкам",
    description: "Детальная статистика, метрики и insights в реальном времени",
    screenshot: "/screenshots/analytics.png",
  },
  {
    icon: Calendar,
    title: "Календарь встреч",
    description: "Планирование и координация деловых встреч на выставке",
    screenshot: "/screenshots/calendar.png",
  },
  {
    icon: Search,
    title: "Поиск выставок",
    description: "Удобный поиск и фильтрация выставок по различным критериям",
    screenshot: "/screenshots/exhibition-search.png",
  },
  {
    icon: Sparkles,
    title: "AI-помощник",
    description: "В перспективе — умный помощник для анализа и рекомендаций",
    screenshot: null,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative section-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Возможности <span className="text-gradient">платформы</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full card-glass hover:scale-105 transition-transform duration-300 group">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg icon-container-bg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 icon-color" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {feature.description}
                    </p>
                  </div>

                  {feature.screenshot && (
                    <div className="relative h-40 rounded-lg overflow-hidden">
                      <Image
                        src={feature.screenshot}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {!feature.screenshot && (
                    <div className="relative h-40 rounded-lg bg-gradient-secondary flex items-center justify-center">
                      <p className="text-sm text-muted-foreground italic">
                        Скоро
                      </p>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
