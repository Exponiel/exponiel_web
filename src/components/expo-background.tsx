"use client";

export function ExpoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Точечная сетка */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(100 100 100 / 0.15) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Размытые пятна - желто-зеленые для Exponiel */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-yellow-200/15 rounded-full blur-3xl" />
      <div className="absolute top-40 right-10 w-[600px] h-[600px] bg-green-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] bg-yellow-100/15 rounded-full blur-3xl" />

      {/* Дополнительные акценты */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-cyan-200/10 rounded-full blur-3xl" />
    </div>
  );
}
