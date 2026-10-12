
import Link from "next/link";
import { deleteGroup } from "../groups/actions";

type GroupCardProps = {
  id: string;
  name: string;
  course: string;
  description: string;
};

export default function GroupCard({
  id,
  name,
  course,
  description,
}: GroupCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-indigo-600">{course}</p>

      <h2 className="mt-2 text-xl font-semibold text-slate-900">
        {name}
      </h2>

      <p className="mt-2 text-slate-600">{description}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={`/groups/${id}/edit`}
          className="rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
        >
          Edit
        </Link>

        <form action={deleteGroup}>
          <input type="hidden" name="id" value={id} />
          <button
            type="submit"
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}
