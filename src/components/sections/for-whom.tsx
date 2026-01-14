"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const organizerFeatures = [
  "Онлайн-бронирование стендов и билетов",
  "Управление заявками и статусами",
  "Чат с участниками и обмен документами",
  "Актуальная карта стендов",
  "Аналитика по выставке и аудитории",
];

const participantFeatures = [
  "Поиск и участие в выставках",
  "Бронирование стендов и билетов",
  "Общение с организаторами",
  "Планирование командировок и встреч",
  "Хранение документов и истории поездок",
];

export function ForWhomSection() {
  return (
    <section className="py-24 relative section-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Для кого <span className="text-gradient">Exponiel</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Для организаторов */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 h-full card-glass hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Для организаторов выставок
              </h3>
              <p className="text-muted-foreground mb-6">
                Exponiel помогает организаторам управлять всеми процессами участия
                в выставке в одном интерфейсе.
              </p>

              <ul className="space-y-3 mb-6">
                {organizerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/screenshots/booth-view.png"
                  alt="Просмотр стенда"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-6 text-sm font-semibold text-accent">
                Без Excel, бесконечной почты и ручных расчётов.
              </p>
            </Card>
          </motion.div>

          {/* Для участников */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8 h-full card-glass hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Для участников выставок
              </h3>
              <p className="text-muted-foreground mb-6">
                Exponiel — это личный кабинет для всех, кто регулярно ездит на
                выставки и деловые мероприятия.
              </p>

              <ul className="space-y-3 mb-6">
                {participantFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/screenshots/exhibition-search.png"
                  alt="Поиск выставок"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-6 text-sm font-semibold text-accent">
                Все рабочие поездки — в одном месте.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
