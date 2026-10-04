import Link from "next/link";
import GroupCard from "../components/GroupCard";

const groups = [
  {
    name: "CSE 212 Study Group",
    course: "CSE 212",
    members: 5,
    meetingPreference: "Online",
  },
  {
    name: "WDD 430 Team Practice",
    course: "WDD 430",
    members: 4,
    meetingPreference: "Online",
  },
  {
    name: "Database Review",
    course: "CSE 341",
    members: 6,
    meetingPreference: "In person",
  },
  {
    name: "Web Development Lab",
    course: "WDD 330",
    members: 3,
    meetingPreference: "Hybrid",
  },
  {
    name: "Python Practice Circle",
    course: "CSE 111",
    members: 7,
    meetingPreference: "Online",
  },
  {
    name: "Software Design Review",
    course: "CSE 340",
    members: 4,
    meetingPreference: "Hybrid",
  },
];

export default function GroupsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto max-w-5xl">
        <nav className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
            ← StudyCircle
          </Link>
          <Link
            href="/groups/create"
            className="rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Create Group
          </Link>
        </nav>

        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Study groups
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find a group that fits your course
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Browse study groups and find other students working toward the same
            academic goals.
          </p>
        </header>

        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <label htmlFor="group-search" className="mb-2 block text-sm font-semibold text-slate-900">
            Search groups
          </label>
          <input
            id="group-search"
            type="search"
            placeholder="Search by course or group name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Available groups</h2>
          <span className="text-sm text-slate-500">{groups.length} groups</span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <GroupCard key={group.name} {...group} />
          ))}
        </div>
      </section>
    </main>
  );
}
