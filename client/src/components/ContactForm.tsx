import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Loader2, CheckCircle, XCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    serviceNeeded: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;

    const formDataToSend = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formDataToSend,
    })
      .then(() => {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          serviceNeeded: "",
          message: ""
        });
      })
      .catch((err) => {
        console.error(err);
        setSubmitStatus("error");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to streamline your accounting? Contact us for a free consultation 
            and discover how we can help your business thrive.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">

            {/* Hidden HTML form for Netlify detection */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              style={{ display: 'none' }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="tel" name="phone" />
              <input type="text" name="businessName" />
              <input type="text" name="serviceNeeded" />
              <textarea name="message"></textarea>
            </form>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 border border-green-200 bg-green-50 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-800">Message Sent Successfully!</p>
                  <p className="text-sm text-green-700">
                    Thank you for contacting Finexact Solutions. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 border border-red-200 bg-red-50 rounded-lg flex items-center space-x-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-red-800">Submission Failed</p>
                  <p className="text-sm text-red-700">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              </div>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div style={{ display: 'none' }}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="Enter your full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange("businessName", e.target.value)}
                        placeholder="Enter your business name"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceNeeded">Service Needed</Label>
                    <Select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onValueChange={(value) => handleInputChange("serviceNeeded", value)}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bookkeeping">Professional Bookkeeping</SelectItem>
                        <SelectItem value="vat">VAT Services</SelectItem>
                        <SelectItem value="income-tax">Income Tax Services</SelectItem>
                        <SelectItem value="tax-audit">Tax Audit Solutions</SelectItem>
                        <SelectItem value="quickbooks">QuickBooks Setup</SelectItem>
                        <SelectItem value="xero">Xero Setup</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      placeholder="Tell us about your specific needs and how we can help..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
