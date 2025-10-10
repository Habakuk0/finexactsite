import React, { useEffect, useState, FormEvent } from "react";
import matter from "gray-matter";
import Navigation from "@/components/Navigation"; // ✅ Use your existing navbar

interface Post {
  title: string;
  date: string;
  summary?: string;
  slug: string;
  coverImage?: string;
}

const ResourcesPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // 🔹 Load all Markdown files from the correct folder
  useEffect(() => {
    const loadPosts = async () => {
      try {
        // ✅ Correct relative glob path (since Vite uses /src as root)
        const files = import.meta.glob("/src/content/resources/*.md", {
          query: "?raw",
          import: "default",
        });
        const loadedPosts: Post[] = [];

        for (const [path, fileLoader] of Object.entries(files)) {
          const rawContent = await fileLoader();
          const { data } = matter(rawContent);
          const slug = path.split("/").pop()?.replace(".md", "") || "";
          loadedPosts.push({
            title: data.title || slug,
            date: data.date,
            summary: data.description || data.summary || "",
            coverImage: data.image || "",
            slug,
          });
        }

        // Sort by date (newest first)
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

  // 🔹 Handle subscription form (Netlify)
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
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <Navigation /> {/* ✅ Adds your site menu */}

      <div className="resources-page bg-gray-50 text-gray-800">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-lg">
            Explore our latest insights, updates, and expert tips on finance,
            accounting, and business growth.
          </p>
        </section>

        {/* Posts Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Latest Posts
          </h2>
          {posts.length === 0 ? (
            <p className="text-center text-gray-600">
              No posts available yet.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
                >
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {post.summary}
                    </p>
                    <a
                      href={`/resources/${post.slug}`}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Stay Updated Section */}
        <section className="bg-indigo-700 text-white py-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">
            Enter your email below to get notified whenever we publish new
            content.
          </p>

          {!submitted ? (
            <form
              name="subscribe"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
            >
              <input type="hidden" name="form-name" value="subscribe" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition duration-300"
              >
                Stay Updated
              </button>
            </form>
          ) : (
            <div className="text-center text-lg font-medium mt-6">
              ✅ Thank you! You’ll now receive updates from FinExact Solutions.
            </div>
          )}
        </section>

        {/* Consultation Section */}
        <section className="bg-white py-20 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Schedule a Consultation
          </h2>
          <p className="text-lg mb-8">
            Ready to take your business finances to the next level? Let’s talk.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Schedule Consultation
          </a>
        </section>
      </div>
    </>
  );
};

export default ResourcesPage;
