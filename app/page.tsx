
import Link from "next/link";
import { prisma } from "../lib/prisma";
import GroupCard from "./components/GroupCard";

export const dynamic = "force-dynamic";

type HomeProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { q = "" } = await searchParams;

  const groups = await prisma.studyGroup.findMany({
    where: q.trim()
      ? {
          OR: [
            { name: { contains: q.trim(), mode: "insensitive" } },
            { course: { contains: q.trim(), mode: "insensitive" } },
          ],
        }
      : undefined,
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-12">
      <p className="text-sm font-bold tracking-wider text-indigo-600">
        STUDYCIRCLE
      </p>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Find your next study group
      </h1>

      <p className="mt-3 text-slate-600">
        Create, discover, and manage study groups for your university courses.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <form action="/" method="GET" className="flex-1">
          <label htmlFor="q" className="sr-only">
            Search groups
          </label>
          <input
            id="q"
            name="q"
            defaultValue={q}
            placeholder="Search by course or group name"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-4 text-slate-900"
          />
        </form>

        <Link
          href="/groups/create"
          className="rounded-lg bg-indigo-600 px-6 py-4 text-center font-semibold text-white hover:bg-indigo-700"
        >
          Create Group
        </Link>
      </div>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Available groups
        </h2>

        {groups.length === 0 ? (
          <p className="rounded-lg border border-slate-200 bg-white p-6 text-slate-600">
            {q
              ? "No groups match your search."
              : "No study groups yet. Create the first one!"}
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </main>
  );
}
