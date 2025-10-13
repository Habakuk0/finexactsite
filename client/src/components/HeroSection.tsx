import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Logo from "@/components/Logo"; // Your logo component

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-amber-50 py-20 lg:py-32 overflow-hidden">
      {/* Background shapes that match your logo */}
      <div className="absolute inset-0">
        {/* Large blue rectangle background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/40 to-transparent"></div>
        
        {/* Orange triangle shape */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-200/30 clip-triangle rotate-45"></div>
        
        {/* Blue triangle shape */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-200/30 clip-triangle -rotate-45"></div>
        
        {/* Small geometric accents */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-amber-300/20 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-300/30 rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Your Logo - Large and prominent */}
          <div className="flex justify-center mb-8">
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
              <Logo size="lg" className="w-16 h-16 lg:w-20 lg:h-20" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Your Partner in{" "}
            <span className="text-blue-600">Accurate Books</span> &{" "}
            <span className="text-amber-500">Smart Accounting</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Professional bookkeeping, tax solutions, and accounting software services 
            to keep your business financially organized, compliant, and efficient.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            >
              <Link href="/contact">Request a Free Consultation</Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-600 hover:bg-amber-50 shadow-sm"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}