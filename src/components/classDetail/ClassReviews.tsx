import ReviewCard from "../common/ReviewCard";
import { mockReviewData } from "@/lib/mock";

export default function ClassReviews() {
  return (
    <div className="space-y-2.5">
      {mockReviewData.map((review) => (
        <ReviewCard key={review.id} data={review} />
      ))}
    </div>
  );
}
