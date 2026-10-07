"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function CreateGroupPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto max-w-2xl">
        <Link href="/groups" className="text-sm font-semibold text-blue-700 hover:underline">
          ← Back to study groups
        </Link>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Create a group</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Start a new StudyCircle group</h1>
          <p className="mt-3 text-slate-600">
            Add the basic information students need to find and join your study group.
          </p>

          {submitted ? (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
              Your group information is ready. Database saving will be connected in a later development phase.
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-900">Group name</label>
              <input id="name" name="name" required placeholder="Example: CSE 212 Study Group" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
            </div>
            <div>
              <label htmlFor="course" className="mb-2 block text-sm font-semibold text-slate-900">Course</label>
              <input id="course" name="course" required placeholder="Example: CSE 212" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
            </div>
            <div>
              <label htmlFor="description" className="mb-2 block text-sm font-semibold text-slate-900">Description</label>
              <textarea id="description" name="description" required rows={4} placeholder="What will your group study or work on?" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
            </div>
            <div>
              <label htmlFor="meetingPreference" className="mb-2 block text-sm font-semibold text-slate-900">Meeting preference</label>
              <select id="meetingPreference" name="meetingPreference" defaultValue="Online" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
                <option>Online</option>
                <option>In person</option>
                <option>Hybrid</option>
              </select>
            </div>
            <button type="submit" className="w-full rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
              Create Study Group
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
