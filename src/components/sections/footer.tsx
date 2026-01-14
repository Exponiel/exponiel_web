"use client";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-gradient">Exponiel</span> ©
          </h3>
          <p className="text-muted-foreground mb-4">
            Цифровая платформа для выставок и деловых поездок
          </p>
          <a
            href="mailto:exponiel@mail.ru"
            className="text-accent hover:underline"
          >
            exponiel@mail.ru
          </a>
          <p className="text-sm text-muted-foreground mt-6">
            © {new Date().getFullYear()} Exponiel. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
