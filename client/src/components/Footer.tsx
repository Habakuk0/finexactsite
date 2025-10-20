import { Link } from "wouter";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo size="md" />
              <div className="text-2xl font-bold text-primary">
                Finexact Solutions
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              We offer professional bookkeeping, tax and Accounting software services helping business simplify their accounting.
            </p>
            <div className="space-y-3">
              {/* Email with large icon */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@finexactsolutions.co.ke" className="text-foreground hover:text-primary transition-colors font-medium">
                  info@finexactsolutions.co.ke
                </a>
              </div>
              
              {/* Phone with large icon */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <a href="tel:+254751151841" className="text-foreground hover:text-primary transition-colors font-medium">
                  +254 751 151 841
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Professional Bookkeeping</li>
              <li className="text-muted-foreground text-sm">VAT Services</li>
              <li className="text-muted-foreground text-sm">Income Tax Filing</li>
              <li className="text-muted-foreground text-sm">QuickBooks & Xero Setup</li>
              <li className="text-muted-foreground text-sm">Tax Audit Solutions</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-primary text-sm font-medium tracking-wide">
            © 2024 Finexact Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}