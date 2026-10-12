
import type { Metadata } from "next";
import { prisma } from "../../lib/prisma";
import GroupCard from "../components/GroupCard";

export const metadata: Metadata = {
  title: "Study Groups",
  description:
    "Discover and join study groups for university courses on StudyCircle.",
};

export const dynamic = "force-dynamic";

export default async function GroupsPage() {
  const groups = await prisma.studyGroup.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Study Groups
        </h1>
        <p className="mt-2 text-slate-600">
          Find a study group that matches your courses and interests.
        </p>
      </div>

      {groups.length === 0 ? (
        <p className="text-slate-600">
          No study groups yet. Check back soon!
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              id={group.id}
              name={group.name}
              course={group.course}
              description={group.description}
            />
          ))}
        </div>
      )}
    </main>
  );
}
