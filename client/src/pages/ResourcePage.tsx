import { useParams } from "wouter";
import { resources } from "@/lib/resources";

export default function ResourcePage() {
  const { slug } = useParams();
  const post = resources.find((r) => r.slug === slug);

  if (!post) return <h2>404 - Not Found</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
