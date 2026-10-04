import Link from "next/link";

const featuredGroups = [
  { name: "CSE 212 Study Group", course: "CSE 212", members: 5 },
  { name: "WDD 430 Team Practice", course: "WDD 430", members: 4 },
  { name: "Database Review", course: "CSE 341", members: 6 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <section className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            StudyCircle
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Find your next study group
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Create, discover, and manage study groups for your university courses.
          </p>
        </header>

        <div className="mb-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/groups"
            className="rounded-lg bg-blue-700 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Browse Study Groups
          </Link>
          <Link
            href="/groups/create"
            className="rounded-lg border border-blue-700 bg-white px-5 py-3 text-center font-semibold text-blue-700 hover:bg-blue-50"
          >
            Create Group
          </Link>
        </div>

        <section aria-labelledby="groups-heading">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="groups-heading" className="text-2xl font-bold text-slate-900">
              Featured groups
            </h2>
            <Link href="/groups" className="text-sm font-semibold text-blue-700 hover:underline">
              View all
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredGroups.map((group) => (
              <article
                key={group.name}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-slate-900">{group.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{group.course}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {group.members} members
                </p>
                <Link
                  href="/groups"
                  className="mt-5 inline-block rounded-md border border-blue-700 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
                >
                  View Group
                </Link>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
