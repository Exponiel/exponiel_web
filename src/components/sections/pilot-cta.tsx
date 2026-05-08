"use client";

import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { Rocket, CheckCircle2 } from "lucide-react";

const pilotBenefits = [
  "Simplify booking processes",
  "Gain additional analytics",
  "Test a new channel for engaging with attendees",
];

export function PilotCTASection() {
  return (
    <section id="contact" className="py-24 relative section-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We are open to <span className="text-gradient">pilot launches</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Exponiel is at the MVP stage. We are looking for exhibition organizers
              willing to test the platform and shape its development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 card-glass">
              <h3 className="text-2xl font-bold mb-6">
                A pilot launch is an opportunity to:
              </h3>
              <ul className="space-y-3 mb-8">
                {pilotBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
