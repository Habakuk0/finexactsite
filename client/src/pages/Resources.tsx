import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

// TODO: Replace with actual data from backend/CMS
const articles = [
  {
    id: "1",
    title: "Understanding VAT Registration Requirements in Kenya",
    description: "A comprehensive guide to VAT registration requirements, thresholds, and compliance obligations for businesses in Kenya.",
    content: "Learn about the current VAT registration thresholds, required documentation, and step-by-step process for registering your business with KRA...",
    category: "Tax Compliance",
    publishDate: "2024-03-15",
    readTime: "8 min read",
    featured: true
  },
  {
    id: "2", 
    title: "QuickBooks vs Xero: Which Accounting Software is Right for Your Business?",
    description: "Compare features, pricing, and capabilities of QuickBooks and Xero to make an informed decision for your business accounting needs.",
    content: "Choosing the right accounting software is crucial for efficient financial management. This comparison covers key features, user experience, and pricing...",
    category: "Software Solutions",
    publishDate: "2024-03-10",
    readTime: "12 min read",
    featured: false
  },
  {
    id: "3",
    title: "Monthly Bookkeeping Checklist for Small Businesses",
    description: "Essential tasks every small business should complete monthly to maintain accurate financial records and ensure compliance.",
    content: "Stay on top of your business finances with this comprehensive monthly checklist covering bank reconciliation, expense tracking, and financial reporting...",
    category: "Bookkeeping",
    publishDate: "2024-03-05",
    readTime: "6 min read",
    featured: false
  },
  {
    id: "4",
    title: "How to Prepare for a KRA Tax Audit",
    description: "Steps to take when facing a KRA audit, required documentation, and how to ensure a smooth audit process.",
    content: "Being prepared for a KRA audit can save time and reduce stress. Learn what documents to keep ready and how to respond to audit requests...",
    category: "Tax Compliance",
    publishDate: "2024-02-28",
    readTime: "10 min read",
    featured: true
  }
];

const categories = ["All", "Tax Compliance", "Bookkeeping", "Software Solutions"];

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Header Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with our latest articles on accounting best practices, 
              tax compliance, and financial management tips for businesses.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {articles.filter(article => article.featured)[0] && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Featured Article</h2>
                <Card className="hover-elevate transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" data-testid="badge-featured-category">
                        {articles[0].category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">Featured</span>
                    </div>
                    <CardTitle className="text-2xl mb-2">{articles[0].title}</CardTitle>
                    <CardDescription className="text-base">
                      {articles[0].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(articles[0].publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{articles[0].readTime}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {articles[0].content}
                    </p>
                    <Button asChild data-testid="button-read-featured">
                      <Link href={`/resources/${articles[0].id}`}>
                        Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 md:mb-0">
                Latest Articles
              </h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className="hover-elevate"
                    data-testid={`button-filter-${category.toLowerCase().replace(" ", "-")}`}
                    onClick={() => console.log(`Filter by: ${category}`)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.filter(article => !article.featured).map((article) => (
                <Card 
                  key={article.id} 
                  className="hover-elevate transition-all duration-300 h-full flex flex-col"
                  data-testid={`card-article-${article.id}`}
                >
                  <CardHeader className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" data-testid={`badge-category-${article.id}`}>
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight mb-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription>
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full"
                      data-testid={`button-read-${article.id}`}
                    >
                      <Link href={`/resources/${article.id}`}>
                        Read Article <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest accounting tips, tax updates, and business insights 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" data-testid="button-resources-contact">
                <Link href="/contact">Subscribe to Updates</Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-resources-consultation">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}