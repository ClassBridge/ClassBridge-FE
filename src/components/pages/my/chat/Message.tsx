import { cn } from "@/lib/utils";

export interface MessageData {
  id: number;
  message: string;
  time: string;
  read: boolean;
  me: boolean;
}

interface Props {
  data: MessageData;
}

export default function Message({ data }: Props) {
  return (
    <div
      className={cn(
        "relative flex items-end gap-1 my-6 mx-4",
        data.me ? "flex-row-reverse" : "flex-row",
      )}
    >
      <div
        className={cn(
          "w-fit max-w-96 py-3 px-4 rounded border-primary-light",
          data.me ? "bg-primary-blur" : "border bg-white",
        )}
      >
        {data.message}
      </div>
      <span
        className={cn(
          "font-normal text-sm text-black",
          data.me ? "mr-2" : "ml-2",
        )}
      >
        {data.time}
      </span>
      <span className="font-normal text-sm text-black">{"•"}</span>
      <span className="font-normal text-sm text-black">
        {data.read ? "읽음" : "안읽음"}
      </span>
    </div>
  );
}
