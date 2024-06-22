import { cn } from "@/lib/utils";

export type ButtonColorScheme = "primary" | "point" | "gray";

interface Props {
  text: string;
  primary?: boolean;
  type?: "sm" | "md" | "lg";
  colorScheme?: ButtonColorScheme;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  primary = false,
  type = "md",
  colorScheme = "primary",
  className,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-center rounded",
        primary
          ? `text-white bg-${colorScheme}`
          : `border border-${colorScheme} text-${colorScheme} bg-white`,
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
