"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const currentProblems = [
  "Booths managed in Excel spreadsheets",
  "Communication via email and messengers",
  "Calculations done manually",
  "Documents scattered across different emails",
  "Analytics missing or fragmented",
];

const exponielSolutions = [
  "Interactive booth map",
  "Transparent pricing and request statuses",
  "Chat and documents in one window",
  "Centralized analytics",
  "Clear process for all parties",
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
          Problem and <span className="text-gradient">Solution</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Current state */}
          <motion.div
            initial={{ opacity: 0, rotateY: -15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-destructive/10 border border-destructive/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-destructive" />
              How it looks today
            </h3>
            <ul className="space-y-4">
              {currentProblems.map((problem, index) => (
                <li key={index} className="text-muted-foreground">
                  {problem}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With Exponiel */}
          <motion.div
            initial={{ opacity: 0, rotateY: 15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary/10 border border-primary/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-primary" />
              How it works with Exponiel
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
