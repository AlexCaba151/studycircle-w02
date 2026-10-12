
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "../../../lib/prisma";

export const metadata: Metadata = {
  title: "Create Study Group",
  description: "Create a study group on StudyCircle.",
};

export default function CreateGroupPage() {
  async function createGroup(formData: FormData) {
    "use server";

    const name = String(formData.get("name") ?? "").trim();
    const course = String(formData.get("course") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();

    if (!name || !course || !description) {
      throw new Error("Please complete all fields.");
    }

    const creator = await prisma.user.upsert({
      where: { email: "demo@studycircle.com" },
      update: {},
      create: {
        name: "Demo User",
        email: "demo@studycircle.com",
      },
    });

    await prisma.studyGroup.create({
      data: {
        name,
        course,
        description,
        creatorId: creator.id,
      },
    });

    redirect("/");
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <Link href="/" className="text-sm text-indigo-600 hover:underline">
        ← Back to study groups
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-slate-900">
        Create a Study Group
      </h1>

      <p className="mt-2 text-slate-600">
        Enter the details to create a group for your course.
      </p>

      <form action={createGroup} className="mt-8 space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block font-medium">
            Group name
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={100}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
            placeholder="e.g. CSE 212 Study Group"
          />
        </div>

        <div>
          <label htmlFor="course" className="mb-2 block font-medium">
            Course
          </label>
          <input
            id="course"
            name="course"
            required
            maxLength={50}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
            placeholder="e.g. CSE 212"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-2 block font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            maxLength={1000}
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
            placeholder="What will members study together?"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Create Group
        </button>
      </form>
    </main>
  );
}
