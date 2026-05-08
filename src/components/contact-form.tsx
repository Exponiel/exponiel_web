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
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
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
        throw new Error(errorData.error || "Error submitting form");
      }

      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setApiError(error instanceof Error ? error.message : "An error occurred while submitting");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Your name"
          className={`mt-2 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Work Email *</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="your@company-email.com"
          className={`mt-2 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="company">Company *</Label>
        <Input
          id="company"
          {...register("company")}
          placeholder="Your company name"
          className={`mt-2 ${errors.company ? "border-red-500 focus-visible:ring-red-500" : ""}`}
        />
        {errors.company && (
          <p className="text-sm text-destructive mt-1">{errors.company.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your exhibition and interest in the pilot launch"
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
            Submitting...
          </>
        ) : (
          "Become a Pilot Partner"
        )}
      </Button>

      {isSubmitted && (
        <p className="text-center text-primary font-medium animate-fade-in">
          Thank you! We will contact you shortly.
        </p>
      )}
    </form>
  );
}
