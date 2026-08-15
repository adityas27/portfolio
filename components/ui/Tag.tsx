type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] text-neutral-700 uppercase">
      {children}
    </span>
  );
}
