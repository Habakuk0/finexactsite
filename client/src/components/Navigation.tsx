import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Calculator } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "PAYE Calculator", href: "/#paye-calculator", icon: Calculator, isAnchor: true },
    { name: "Contact", href: "/contact" },
  ];

  // Check if current location matches navigation item
  const isActive = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    if (href.startsWith("/#")) {
      return false; // Don't highlight anchor links as active
    }
    return location.startsWith(href);
  };

  const handleNavigationClick = (item: any, e: React.MouseEvent) => {
    if (item.isAnchor && location === "/") {
      e.preventDefault();
      // Smooth scroll to calculator section
      const calculatorSection = document.getElementById('paye-calculator');
      if (calculatorSection) {
        calculatorSection.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`bg-background border-b border-border sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg bg-background/95 backdrop-blur-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Logo size="md" />
            <div className="text-2xl font-bold text-primary">
              Finexact Solutions
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  onClick={(e) => handleNavigationClick(item, e)}
                  className={`text-sm font-medium transition-colors hover:text-primary relative py-2 flex items-center gap-1 ${
                    isActive(item.href)
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  } ${item.isAnchor ? "text-blue-600 hover:text-blue-700" : ""}`}
                  data-testid={`link-nav-${item.name.toLowerCase().replace(' ', '-')}`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.name}
                  {item.isAnchor && (
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
                      Free Tool
                    </span>
                  )}
                  {/* Active indicator bar */}
                  {isActive(item.href) && !item.isAnchor && (
                    <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </Link>
              </div>
            ))}

            <Button
              asChild
              size="sm"
              data-testid="button-nav-consultation"
            >
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavigationClick(item, e);
                    if (!item.isAnchor) {
                      setIsMenuOpen(false);
                    }
                  }}
                  className={`block px-3 py-3 text-base font-medium transition-colors hover:text-primary rounded-lg flex items-center justify-between ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-muted-foreground"
                  } ${item.isAnchor ? "text-blue-600 hover:text-blue-700" : ""}`}
                  data-testid={`link-mobile-${item.name.toLowerCase().replace(' ', '-')}`}
                >
                  <div className="flex items-center">
                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                    {item.name}
                    {isActive(item.href) && !item.isAnchor && (
                      <span className="ml-2 w-2 h-2 bg-primary rounded-full"></span>
                    )}
                  </div>
                  {item.isAnchor && (
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                      Free
                    </span>
                  )}
                </Link>
              ))}
              
              <div className="px-3 py-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full"
                  data-testid="button-mobile-consultation"
                >
                  <Link href="/contact">Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}