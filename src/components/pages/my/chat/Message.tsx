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
        "relative flex items-end gap-2 my-6 mx-4",
        data.me ? "flex-row-reverse" : "flex-row",
      )}
    >
      <div
        className={cn(
          "w-fit max-w-96 py-3 px-4 rounded border-primary-light",
          data.me
            ? "rounded-br-[0] bg-primary-blur"
            : "rounded-bl-[0] border bg-white",
        )}
      >
        {data.message}
      </div>
      <span className="font-normal text-sm text-black">{data.time}</span>
      <span className="font-normal text-sm text-primary">
        {!data.read && 1}
      </span>
    </div>
  );
}
