type GroupCardProps = {
  id: string;
  name: string;
  course: string;
  description: string;
};

export default function GroupCard({
  name,
  course,
  description,
}: GroupCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-blue-600">{course}</p>

      <h2 className="mt-2 text-xl font-semibold text-slate-900">{name}</h2>

      <p className="mt-2 text-slate-600">{description}</p>

      <button
        type="button"
        className="mt-5 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        View Group
      </button>
    </article>
  );
}