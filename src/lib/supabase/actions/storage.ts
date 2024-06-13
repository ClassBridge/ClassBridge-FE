import { createClient } from "@/lib/supabase/client";
import type { Buckets } from "@/constants/supabase";

export function getFilePublicUrl(
  bucket: Buckets,
  folder: string,
  path: string,
) {
  const supabase = createClient();

  const data = supabase.storage
    .from(bucket)
    .getPublicUrl(`${folder}/${path}`).data;

  return data.publicUrl;
}
