"use server";

import { createClient } from "@/lib/supabase/server";
import type { Enums } from "@/lib/supabase/types";
import { CLASS_TABLE, USER_TABLE } from "@/constants/supabase";

export type ClassOrder = "like" | "review" | "date";

export async function getClassList(
  order: ClassOrder = "like",
  limit?: number,
  category?: Enums<"category">,
  city?: Enums<"city">,
) {
  const supabase = createClient();
  let classListQuery;

  const selectColumns = `
    id,
    name,
    category,
    tutor_id,
    address1,
    address2,
    price,
    duration,
    rating_avg,
    review_cnt,
    image_urls
  `;

  const sortOrder =
    order === "like"
      ? "like_cnt"
      : order === "review"
        ? "review_cnt"
        : "end_date";

  if (sortOrder === "end_date") {
    const now = new Date();
    const currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    classListQuery = supabase
      .from(CLASS_TABLE)
      .select(selectColumns)
      .gte(sortOrder, currentDate)
      .order(sortOrder, { ascending: true });
  } else {
    classListQuery = supabase
      .from(CLASS_TABLE)
      .select(selectColumns)
      .order(sortOrder, { ascending: false });
  }

  if (limit) {
    classListQuery = classListQuery.limit(limit);
  }

  const { data: classData, error } = await classListQuery;

  if (error) {
    return;
  }

  const tutorIds = classData.map((item) => item.tutor_id);

  const { data: tutorData, error: tutorError } = await supabase
    .from(USER_TABLE)
    .select("id, username")
    .in("id", tutorIds);

  if (tutorError) {
    return;
  }

  const result = classData.map((classItem) => ({
    ...classItem,
    tutor: tutorData.find((tutor) => tutor.id === classItem.tutor_id),
  }));

  return result;
}

export async function getClass(classId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(CLASS_TABLE)
    .select("*")
    .eq("id", classId);

  return { data, error };
}

export async function getClassSummary(classId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(CLASS_TABLE)
    .select(
      `
		id, 
		name, 
		category,
		tutor_id, 
		address, 
		price, 
		duration, 
		image_urls
	  `,
    )
    .eq("id", classId);

  if (error) {
    return;
  }

  const { data: tutorData, error: tutorError } = await supabase
    .from(USER_TABLE)
    .select("username")
    .eq("id", data[0].tutor_id);

  if (tutorError) {
    return;
  }

  const result = data.map((item) => ({
    ...item,
    tutor: { name: tutorData[0].username },
  }));

  return result;
}
