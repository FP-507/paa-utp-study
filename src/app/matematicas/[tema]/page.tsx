import { notFound } from "next/navigation";
import { mathTopics } from "@/data/math-data";
import TopicContent from "@/components/TopicContent";

export function generateStaticParams() {
  return mathTopics.map((t) => ({ tema: t.id }));
}

export default async function MathTopicPage({ params }: { params: Promise<{ tema: string }> }) {
  const { tema } = await params;
  const topic = mathTopics.find((t) => t.id === tema);
  if (!topic) notFound();

  return (
    <div className="min-h-screen bg-grid-pattern pt-14 lg:pt-0">
      <TopicContent topic={topic} />
    </div>
  );
}
