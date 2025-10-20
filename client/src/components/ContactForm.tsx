import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
    botField: "" // honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // If honeypot is filled, likely a bot—ignore
    if (formData.botField) {
      console.warn("Bot detected!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          service: "",
          message: "",
          botField: ""
        });
      } else {
        const result = await response.json();
        throw new Error(result.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot hidden field */}
          <div style={{ display: "none" }}>
            <Label htmlFor="botField">Don't fill this out if you're human</Label>
            <Input
              id="botField"
              name="botField"
              value={formData.botField}
              onChange={(e) => handleInputChange("botField", e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="service">Service Interest</Label>
            <Select
              name="service"
              value={formData.service}
              onValueChange={(value) => handleInputChange("service", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="QuickBooks Implementation">QuickBooks Implementation</SelectItem>
                <SelectItem value="Xero Setup">Xero Setup</SelectItem>
                <SelectItem value="Sage Accounting">Sage Accounting</SelectItem>
                <SelectItem value="Zoho Books">Zoho Books</SelectItem>
                <SelectItem value="Data Migration">Data Migration</SelectItem>
                <SelectItem value="Staff Training">Staff Training</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={5}
              disabled={isSubmitting}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <><Loader2 className="animate-spin w-4 h-4 mr-2" /> Sending...</> : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
