import { Star, StarHalf } from "lucide-react";
import COLORS from "@/constants/colors";

interface Props {
  size: number;
  value?: number;
}

export default function StarRating({ size, value = 0 }: Props) {
  return (
    <div className="relative">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            stroke={COLORS.point.star}
            strokeWidth={1.5}
            size={size}
          />
        ))}
      </div>
      <div className="absolute top-0 flex gap-0.5">
        {Array.from({ length: Math.trunc(value) }).map((_, i) => (
          <Star key={i} fill={COLORS.point.star} strokeWidth={0} size={size} />
        ))}
        {Math.round(value) !== value && (
          <StarHalf fill={COLORS.point.star} strokeWidth={0} size={size} />
        )}
      </div>
    </div>
  );
}
