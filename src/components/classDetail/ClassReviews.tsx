import ReviewCard from "../common/ReviewCard";

export default function ClassReviews() {
  const data = [{ id: 1, name: "ddd" }];

  return (
    <div>
      {data.map((review) => (
        <ReviewCard key={review.id} data={data} />
      ))}
    </div>
  );
}
