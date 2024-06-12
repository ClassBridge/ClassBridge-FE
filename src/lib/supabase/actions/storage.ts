"use server";

import { createClient } from "@/lib/supabase/server";

export function getFilePublicUrl(bucket: string, path: string) {
  const supabase = createClient();

  const data = supabase.storage.from(bucket).getPublicUrl(path).data;

  return data.publicUrl;
}
