import type { Tables } from "@/lib/supabase/types";
import { cn, formatTimeToLocaleString } from "@/lib/utils";

interface Props {
  data: Tables<"chat">;
  user: string;
}

export default function Message({ data, user }: Props) {
  return (
    <div
      className={cn(
        "relative flex items-end gap-2 my-6 mx-4",
        data.user_id === user ? "flex-row-reverse" : "flex-row",
      )}
    >
      <div
        className={cn(
          "w-fit max-w-96 py-3 px-4 rounded border-primary-light",
          data.user_id === user
            ? "rounded-br-[0] bg-primary-blur"
            : "rounded-bl-[0] border bg-white",
        )}
      >
        {data.content}
      </div>
      <span className="font-normal text-sm text-black">
        {formatTimeToLocaleString(new Date(data.created_at))}
      </span>
      <span className="font-normal text-sm text-primary">
        {!data.is_read && 1}
      </span>
    </div>
  );
}
