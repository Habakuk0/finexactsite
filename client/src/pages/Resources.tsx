import React, { useEffect, useState, FormEvent } from "react";
import fm from "front-matter";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileText, TrendingUp, ArrowRight, Mail, Star } from "lucide-react";

interface Post {
  title: string;
  date: string;
  summary?: string;
  slug: string;
  coverImage?: string;
}

const ResourcesPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const files = import.meta.glob("/src/content/resources/*.md", {
          query: "?raw",
          import: "default",
        });
        const loadedPosts: Post[] = [];

        for (const [path, fileLoader] of Object.entries(files)) {
          const rawContent = await fileLoader();
          const { attributes: data, body } = fm(rawContent);
          const slug = path.split("/").pop()?.replace(".md", "") || "";
          loadedPosts.push({
            title: data.title || slug,
            date: data.date,
            summary: data.description || data.summary || "",
            coverImage: data.image || "",
            slug,
          });
        }

        loadedPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(loadedPosts);
      } catch (err) {
        console.error("Error loading markdown posts:", err);
      }
    };

    loadPosts();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubscribed(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Compact Header */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-amber-50 relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/40 to-transparent"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-200/30 clip-triangle rotate-45"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Resources & Insights
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert articles, tax updates, and financial insights to help your business thrive
            </p>
          </div>
        </section>

        {/* Featured Resources Banner */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Tax Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-amber-600" />
                <span>Financial Tips</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Compliance Guides</span>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Resources Grid */}
        <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-12 h-12 bg-blue-100/30 rotate-45 rounded-lg"></div>
            <div className="absolute bottom-32 right-20 w-8 h-8 bg-amber-100/30 -rotate-12 rounded"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Latest Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed with our latest articles and financial insights
              </p>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600">No resources available yet.</p>
                <p className="text-sm text-gray-500 mt-2">Check back soon for updates!</p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 bg-white overflow-hidden"
                  >
                    {post.coverImage && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          index % 2 === 0 ? 'bg-blue-500' : 'bg-amber-500'
                        }`}></div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                        {post.summary}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/resources/${post.slug}`}
                          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 group/link"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <div className="text-xs text-gray-500">
                          {Math.ceil((post.summary?.length || 0) / 200)} min read
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Creative Stay Updated Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-100 relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-24 h-24 bg-emerald-200/30 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-200/20 clip-triangle rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-300/10 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Never Miss an Update
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join our newsletter for exclusive financial insights and tax tips delivered to your inbox
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Benefits */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    What you'll get:
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Latest tax law changes & updates",
                      "Financial planning strategies",
                      "Exclusive business insights",
                      "Quarterly compliance reminders"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 group">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Star className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-200">
                    <p className="text-sm text-emerald-800 font-medium">
                      💡 Join 500+ business owners who stay informed with our newsletter
                    </p>
                  </div>
                </div>

                {/* Right side - Subscription Form */}
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
                  {!subscribed ? (
                    <div>
                      <h4 className="text-xl font-bold mb-4">Subscribe Now</h4>
                      <p className="text-emerald-100 mb-6">
                        Enter your email below to get started
                      </p>
                      
                      <form
                        name="subscribe"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <input type="hidden" name="form-name" value="subscribe" />
                        <input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          required
                          className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <button
                          type="submit"
                          className="w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-400 transition duration-300 transform hover:scale-105"
                        >
                          Subscribe to Updates
                        </button>
                      </form>
                      
                      <p className="text-xs text-emerald-200 mt-4 text-center">
                        No spam. Unsubscribe anytime.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Welcome Aboard! 🎉</h4>
                      <p className="text-emerald-100">
                        Thank you for subscribing! Check your email for confirmation.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="flex justify-center mt-8 space-x-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${item * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;