type MetricProps = {
  value: string;
  label: string;
};

export function Metric({ value, label }: MetricProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5">
      <div className="text-2xl font-semibold tracking-[-0.06em] text-neutral-900">{value}</div>
      <div className="mt-2 text-sm leading-6 text-neutral-600">{label}</div>
    </div>
  );
}
