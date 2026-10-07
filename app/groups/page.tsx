import type { Metadata } from "next";
import GroupCard from "../components/GroupCard";

export const metadata: Metadata = {
  title: "Study Groups",
  description:
    "Discover and join study groups for university courses on StudyCircle.",
};

const groups = [
  {
    id: "1",
    name: "CSE 212 Study Group",
    course: "CSE 212",
    description: "Practice data structures and algorithms together.",
  },
  {
    id: "2",
    name: "WDD 430 Study Group",
    course: "WDD 430",
    description: "Work together on web development projects.",
  },
];

export default function GroupsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Study Groups</h1>
        <p className="mt-2 text-slate-600">
          Find a study group that matches your courses and interests.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <GroupCard key={group.id} {...group} />
        ))}
      </div>
    </main>
  );
}