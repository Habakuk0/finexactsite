import React, { useEffect, useState } from "react";
import fm from "front-matter";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileText, TrendingUp, ArrowRight } from "lucide-react";

interface Post {
  title: string;
  date: string;
  summary?: string;
  slug: string;
  coverImage?: string;
}

const ResourcesPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

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
          const { attributes: data } = fm(rawContent);
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Simple Clean Header */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-amber-50 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Resources & Insights
          </h1>
          <p className="text-gray-600">
            Explore our latest financial articles, templates, and tax updates
          </p>
        </section>

        {/* Quick Category Row */}
        <section className="py-6 bg-white border-b">
          <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
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
        </section>

        {/* Minimalist Resource Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600">No resources available yet.</p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white overflow-hidden hover:-translate-y-2"
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
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            index % 2 === 0 ? "bg-blue-500" : "bg-amber-500"
                          }`}
                        ></div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {post.summary}
                      </p>

                      <Link
                        href={`/resources/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
