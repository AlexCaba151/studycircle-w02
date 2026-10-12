
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "../../../../lib/prisma";
import { updateGroup } from "../../actions";

export const metadata: Metadata = {
  title: "Edit Study Group",
  description: "Update a StudyCircle study group.",
};

type EditGroupPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditGroupPage({
  params,
}: EditGroupPageProps) {
  const { id } = await params;

  const group = await prisma.studyGroup.findUnique({
    where: { id },
  });

  if (!group) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <Link
        href="/"
        className="text-sm text-indigo-600 hover:underline"
      >
        ← Back to study groups
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-slate-900">
        Edit Study Group
      </h1>

      <p className="mt-2 text-slate-600">
        Update the details of your study group.
      </p>

      <form action={updateGroup} className="mt-8 space-y-5">
        <input type="hidden" name="id" value={group.id} />

        <div>
          <label htmlFor="name" className="mb-2 block font-medium">
            Group name
          </label>
          <input
            id="name"
            name="name"
            defaultValue={group.name}
            required
            maxLength={100}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label htmlFor="course" className="mb-2 block font-medium">
            Course
          </label>
          <input
            id="course"
            name="course"
            defaultValue={group.course}
            required
            maxLength={50}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={group.description}
            required
            maxLength={1000}
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Save Changes
        </button>
      </form>
    </main>
  );
}
