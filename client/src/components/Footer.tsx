import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              Finexact Solutions
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your Partner in Accurate Books & Smart Accounting. Professional bookkeeping, 
              tax services, and accounting software solutions for businesses.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Email: <span className="text-foreground">info@finexactsolutions.co.ke</span></p>
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

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Finexact Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}