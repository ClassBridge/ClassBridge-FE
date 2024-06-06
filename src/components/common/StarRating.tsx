import { Star, StarHalf } from "lucide-react";

interface Props {
  size: number;
  initialValue?: number;
  editable?: boolean;
  onChange?: () => void;
}

export default function StarRating({
  size,
  initialValue = 0,
  editable = false,
  onChange,
}: Props) {
  return (
    <div className="relative">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} stroke="#FFC700" strokeWidth={1.5} size={size} />
        ))}
      </div>
      <div className="absolute top-0 flex gap-1">
        {initialValue && (
          <>
            {Array.from({ length: Math.trunc(initialValue) }).map((_, i) => (
              <Star key={i} fill="#FFC700" strokeWidth={0} size={size} />
            ))}
            {Math.round(initialValue) !== initialValue && (
              <StarHalf fill="#FFC700" strokeWidth={0} size={size} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
