
"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateGroup(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const name = String(formData.get("name") ?? "").trim();
  const course = String(formData.get("course") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  if (!id || !name || !course || !description) {
    throw new Error("All fields are required.");
  }

  await prisma.studyGroup.update({
    where: { id },
    data: { name, course, description },
  });

  revalidatePath("/");
  revalidatePath("/groups");
  redirect("/");
}

export async function deleteGroup(formData: FormData) {
  const id = String(formData.get("id") ?? "");

  if (!id) {
    throw new Error("Group ID is required.");
  }

  await prisma.studyGroup.delete({
    where: { id },
  });

  revalidatePath("/");
  revalidatePath("/groups");
}
