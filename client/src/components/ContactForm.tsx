import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle, XCircle, Mail, Phone } from "lucide-react";

// ✅ Schema definition
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");

    try {
      const response = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (err: any) {
      console.error(err);
      setSubmitStatus("error");
    }
  };

  const services = [
    "QuickBooks Implementation",
    "Xero Setup",
    "Sage Accounting",
    "Zoho Books",
    "Data Migration",
    "Staff Training",
    "Other",
  ];

  return (
    <Card className="max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
        <CardDescription>We'll get back to you within 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === "success" && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded flex items-center space-x-2">
            <CheckCircle className="text-green-600" />
            <span className="text-green-800">Message sent successfully!</span>
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded flex items-center space-x-2">
            <XCircle className="text-red-600" />
            <span className="text-red-800">Failed to send message. Please try again.</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" {...register("firstName")} disabled={isSubmitting} />
              {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" {...register("lastName")} disabled={isSubmitting} />
              {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 items-end">
            <div className="flex items-center space-x-2">
              <Mail className="w-8 h-8 text-primary" />
              <div className="flex-1">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" {...register("email")} disabled={isSubmitting} />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-8 h-8 text-accent" />
              <div className="flex-1">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" {...register("phone")} disabled={isSubmitting} />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" {...register("company")} disabled={isSubmitting} />
          </div>

          <div>
            <Label htmlFor="service">Service Interest</Label>
            <Select
              onValueChange={(value) => {
                const event = { target: { name: "service", value } };
                register("service").onChange(event);
              }}
              disabled={isSubmitting}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" rows={5} {...register("message")} disabled={isSubmitting} />
            {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin w-4 h-4 mr-2" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}