import { cn } from "@/lib/utils";

interface Props {
  text: string;
  primary?: boolean;
  type?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  primary = false,
  type = "md",
  className,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-center rounded",
        primary
          ? "text-white bg-primary"
          : "border border-primary text-primary bg-white",
        type === "sm"
          ? "font-medium text-sm min-w-max py-2 px-4"
          : type === "md"
            ? "font-bold text-base min-w-max h-10"
            : "h-[60px] font-bold text-lg",
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
