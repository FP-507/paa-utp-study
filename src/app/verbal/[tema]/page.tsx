import { notFound } from "next/navigation";
import { verbalTopics } from "@/data/verbal-data";
import TopicContent from "@/components/TopicContent";

export function generateStaticParams() {
  return verbalTopics.map((t) => ({ tema: t.id }));
}

export default async function VerbalTopicPage({ params }: { params: Promise<{ tema: string }> }) {
  const { tema } = await params;
  const topic = verbalTopics.find((t) => t.id === tema);
  if (!topic) notFound();

  return (
    <div className="min-h-screen bg-grid-pattern pt-14 lg:pt-0">
      <TopicContent topic={topic} />
    </div>
  );
}
