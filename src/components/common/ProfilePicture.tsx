import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Props {
  src?: string;
  fallback: string;
  large?: boolean;
}

export default function ProfilePicture({
  src,
  fallback,
  large = false,
}: Props) {
  return (
    <Avatar
      className={cn(
        "bg-point shadow-[0_0_4px_0_rgba(0,0,0,0.2)]",
        large && "w-[50px] h-[50px] ",
      )}
    >
      <AvatarImage src={src} alt={fallback} />
      <AvatarFallback className="font-bold text-white">
        {fallback.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
