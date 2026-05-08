"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const organizerFeatures = [
  "Online booth and ticket booking management",
  "Request and status management",
  "Chat with attendees and document sharing",
  "Task synchronization with calendar",
  "Exhibition and audience analytics",
];

const participantFeatures = [
  "Discover and attend exhibitions",
  "Book booths and tickets",
  "Communicate with organizers",
  "Plan business trips and meetings",
  "Store documents and travel history",
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
          Who is <span className="text-gradient">Exponiel</span> for
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
                For Exhibition Organizers
              </h3>
              <p className="text-muted-foreground mb-6">
                Exponiel simplifies organizers&apos; work by bringing all tools into one platform
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
                  src="/screenshots/exhibition-management.webp"
                  alt="Exhibition Management"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-6 text-sm font-semibold text-accent">
                No Excel, endless emails, or manual calculations.
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
                For Exhibition Attendees
              </h3>
              <p className="text-muted-foreground mb-6">
                Exponiel is a personal dashboard for anyone who regularly attends
                exhibitions and business events.
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
                  src="/screenshots/exhibition-search-new.webp"
                  alt="Exhibition Search"
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-6 text-sm font-semibold text-accent">
                All business trips — in one place.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
