import { useParams } from "wouter";
import { resources } from "@/lib/resources";

export default function ResourcePage() {
  const { slug } = useParams();
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) return <h2>404 - Not Found</h2>;

  return (
    <div className="prose mx-auto p-4">
      <h1>{resource.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: resource.content }} />
    </div>
  );
}
