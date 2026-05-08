"use client";

import { motion } from "framer-motion";
import { Upload, Users, MessageSquare, BarChart3 } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Organizer connects the exhibition to the platform",
    description: "Quick integration and exhibition setup in the system",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    number: 2,
    icon: Users,
    title: "Attendees join from the exhibition website or directly via Exponiel",
    description: "Convenient access in just a few clicks",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    number: 3,
    icon: MessageSquare,
    title: "Attendees book booths or tickets and chat with managers",
    description: "Transparent booking and communication process",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
  {
    number: 4,
    icon: BarChart3,
    title: "Organizer manages the process and views analytics",
    description: "Full control and real-time data",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative section-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          How <span className="text-gradient">Exponiel</span> Works
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
