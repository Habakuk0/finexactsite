"use client";
import { useEffect } from "react";
import { useLocation, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import ResourcePage from "@/pages/ResourcePage";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// 🧭 Automatically scroll to top on every route change
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Smooth scroll to top when navigating between pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={ResourcePage} />
      <Route path="/contact" component={Contact} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop /> {/* ✅ Scrolls to top when route changes */}
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
