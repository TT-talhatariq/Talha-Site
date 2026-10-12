export default function SeatsLeft({
  seatsLeft,
  totalSeats,
}: {
  seatsLeft: number;
  totalSeats: number;
}) {
  if (seatsLeft <= 0) return null;

  const taken = Math.min(100, ((totalSeats - seatsLeft) / totalSeats) * 100);

  return (
    <div className="mb-6 rounded-xl border border-orange-200 bg-orange-50 p-4">
      <p className="text-sm font-bold text-orange-800 mb-3">
        🔥 Only {seatsLeft} discounted seats left
      </p>
      <div className="h-2 rounded-full bg-orange-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500"
          style={{ width: `${taken}%` }}
        />
      </div>
    </div>
  );
}
