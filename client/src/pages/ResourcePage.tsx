import { useParams } from "wouter";
import { resources } from "@/lib/resources";
import Navigation from "@/components/Navigation";

export default function ResourcePage() {
  const { slug } = useParams();
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">404 - Resource Not Found</h2>
        <p className="text-gray-600 mt-4">The resource you're looking for doesn't exist.</p>
        <a href="/resources" className="text-blue-600 hover:underline mt-4 inline-block">
          ← Back to Resources
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto p-6">
        <article className="prose lg:prose-xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{resource.title}</h1>
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: resource.html }}
          />
        </article>
        <div className="mt-8 text-center">
          <a 
            href="/resources" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            ← Back to All Resources
          </a>
        </div>
      </div>
    </div>
  );
}