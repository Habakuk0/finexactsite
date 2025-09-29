import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Header Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            {/* Removed the repetitive line */}
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}