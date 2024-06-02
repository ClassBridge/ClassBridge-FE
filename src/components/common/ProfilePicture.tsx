import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  src?: string;
  fallback: string;
}

export default function ProfilePicture({ src, fallback }: Props) {
  return (
    <Avatar className="shadow-[0_0_4px_0_rgba(0,0,0,0.2)]">
      <AvatarImage src={src} alt={fallback} />
      <AvatarFallback>{fallback.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
