interface PriceSummaryProps {
  item: string;
  originalPrice: string;
  discountLabel: string;
  discountAmount: string;
  total: string;
  /** Tailwind text color for the discount line. */
  discountClassName?: string;
}

export default function PriceSummary({
  item,
  originalPrice,
  discountLabel,
  discountAmount,
  total,
  discountClassName = 'text-blue-600',
}: PriceSummaryProps) {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex justify-between">
        <span className="text-gray-600">{item}</span>
        <span className="font-semibold">{originalPrice}</span>
      </div>
      <div className={`flex justify-between ${discountClassName}`}>
        <span>{discountLabel}</span>
        <span>-{discountAmount}</span>
      </div>
      <hr className="border-gray-200" />
      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span className="text-blue-600">{total}</span>
      </div>
    </div>
  );
}
