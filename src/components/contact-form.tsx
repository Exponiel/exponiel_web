"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email"),
  company: z.string().min(2, "Название компании обязательно"),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setApiError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Ошибка при отправке формы");
      }

      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setApiError(error instanceof Error ? error.message : "Произошла ошибка при отправке");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">Имя *</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Ваше имя"
          className={`mt-2 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="ваш@email.com"
          className={`mt-2 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="company">Компания *</Label>
        <Input
          id="company"
          {...register("company")}
          placeholder="Название вашей компании"
          className={`mt-2 ${errors.company ? "border-red-500 focus-visible:ring-red-500" : ""}`}
        />
        {errors.company && (
          <p className="text-sm text-destructive mt-1">{errors.company.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Сообщение *</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Расскажите о вашей выставке и интересе к пилотному запуску"
          className={`mt-2 min-h-32 ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      {apiError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {apiError}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full btn-cta text-lg py-7"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Отправка...
          </>
        ) : (
          "Стать пилотным партнёром"
        )}
      </Button>

      {isSubmitted && (
        <p className="text-center text-primary font-medium animate-fade-in">
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </p>
      )}
    </form>
  );
}
