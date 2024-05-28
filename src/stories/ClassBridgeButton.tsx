import { cn } from "@/lib/utils";

interface Props {
  primary: boolean;
  label: string;
}

export default function ClassBridgeButton({ primary = false, label }: Props) {
  return (
    <button
      className={cn(
        "py-2 px-4 rounded-md font-pretendard",
        primary
          ? "bg-primary text-white"
          : "bg-white text-primary border border-primary"
      )}
    >
      {label}
    </button>
  );
}
