import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Professional_accounting_office_workspace_77f905a5.png";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-20 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional accounting workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Your Partner in{" "}
            <span className="text-primary-foreground">Accurate Books</span> &{" "}
            <span className="text-primary-foreground">Smart Accounting</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Professional bookkeeping, tax solutions, and accounting software services 
            to keep your business financially organized, compliant, and efficient.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              data-testid="button-hero-consultation"
            >
              <Link href="/contact">Request a Free Consultation</Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              data-testid="button-hero-services"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}