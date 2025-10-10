import React, { useState, FormEvent } from "react";

const ResourcesPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

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
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="resources-page bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="text-lg">
          Explore our latest insights, updates, and expert tips on finance, accounting, and business growth.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Latest Posts</h2>
        {/* Decap CMS posts will render here */}
        <div id="blog-posts" className="grid gap-8 md:grid-cols-3">
          {/* CMS dynamically injects posts */}
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-lg mb-8">
          Enter your email below to get notified whenever we publish new content.
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
        <h2 className="text-3xl font-semibold mb-6">Schedule a Consultation</h2>
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
  );
};

export default ResourcesPage;
