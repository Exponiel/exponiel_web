"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  animation: string;
}

export function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate bubbles with random properties
    const colors = [
      "bg-yellow-300/10",
      "bg-green-400/10",
      "bg-accent/10",
      "bg-yellow-400/10",
      "bg-green-300/10",
    ];

    const animations = [
      "float-complex",
      "drift",
      "pulse-glow",
      "float",
    ];

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const bubbleCount = isMobile ? 8 : 15;

    const generatedBubbles: Bubble[] = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 100, // 100-300px
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15, // 15-25s
      color: colors[Math.floor(Math.random() * colors.length)],
      animation: animations[Math.floor(Math.random() * animations.length)],
    }));

    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full blur-3xl ${bubble.color}`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${Math.random() * 100}%`,
            animation: `${bubble.animation} ${bubble.duration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
