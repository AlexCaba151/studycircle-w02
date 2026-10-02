const groups = [
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

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <input
            aria-label="Search study groups"
            placeholder="Search by course or group name"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
          />
          <button className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white">
            Create Group
          </button>
        </div>

        <section aria-labelledby="groups-heading">
          <h2 id="groups-heading" className="mb-4 text-2xl font-bold text-slate-900">
            Available groups
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {groups.map((group) => (
              <article
                key={group.name}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-slate-900">{group.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{group.course}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {group.members} members
                </p>
                <button className="mt-5 rounded-md border border-blue-700 px-4 py-2 text-sm font-semibold text-blue-700">
                  View Group
                </button>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
