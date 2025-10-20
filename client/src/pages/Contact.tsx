import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
