type GroupCardProps = {
  name: string;
  course: string;
  members: number;
  meetingPreference: string;
};

export default function GroupCard({
  name,
  course,
  members,
  meetingPreference,
}: GroupCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex-1">
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {course}
        </span>
        <h2 className="mt-3 text-lg font-bold text-slate-900">{name}</h2>
        <p className="mt-2 text-sm text-slate-600">
          {members} {members === 1 ? "member" : "members"} · {meetingPreference}
        </p>
      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-lg border border-blue-700 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
      >
        View Group
      </button>
    </article>
  );
}
