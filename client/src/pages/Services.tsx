import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, Settings, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "bookkeeping",
    title: "Professional Bookkeeping",
    description: "Comprehensive monthly bookkeeping services to keep your financial records accurate and up-to-date.",
    icon: Calculator,
    features: [
      "Monthly bookkeeping and financial statements",
      "Bank reconciliations and account management", 
      "Payroll support and processing",
      "Tax-ready reports and documentation",
      "Cash flow monitoring and analysis",
      "Expense tracking and categorization"
    ],
    benefits: "Keep your books organized, ensure accuracy, and save time for core business activities."
  },
  {
    id: "tax",
    title: "Tax Services",
    description: "Complete tax solutions including VAT services, income tax filing, and audit support.",
    icon: FileText,
    features: [
      "VAT registration, filing, and compliance",
      "Corporate and individual income tax filing",
      "Tax audit solutions and KRA representation",
      "Tax planning and optimization strategies",
      "Compliance monitoring and reporting",
      "Tax dispute resolution support"
    ],
    benefits: "Stay compliant with KRA regulations and minimize tax liabilities through expert guidance."
  },
  {
    id: "software",
    title: "Accounting Software Solutions",
    description: "Expert setup and support for QuickBooks, Xero, and other accounting software platforms.",
    icon: Settings,
    features: [
      "QuickBooks and Xero installation and setup",
      "Chart of accounts creation and customization",
      "Data migration from existing systems",
      "Software training and user support",
      "System troubleshooting and maintenance",
      "Integration with banking and payment systems"
    ],
    benefits: "Streamline your accounting processes with properly configured software that grows with your business."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Header Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive financial services designed to help your business succeed. 
              From bookkeeping to tax compliance, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.id}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <Card className="h-full">
                        <CardHeader>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start">
                                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-4 bg-muted/20 rounded-lg mb-6">
                            <p className="text-sm text-muted-foreground">
                              <strong>Benefits:</strong> {service.benefits}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                      <div className="text-center lg:text-left">
                        <h3 className="text-3xl font-bold text-foreground mb-4">
                          {service.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6">
                          Professional {service.title.toLowerCase()} services tailored to your business needs.
                        </p>
                        <Button asChild size="lg" data-testid={`button-quote-${service.id}`}>
                          <Link href="/contact">Request a Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today for a free consultation and discover how our services 
              can transform your business financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" data-testid="button-services-consultation">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-services-about">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}