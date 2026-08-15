type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow ? (
        <p
          className={`mb-3 text-[11px] font-medium uppercase tracking-[0.2em] ${
            invert ? "text-neutral-300" : "text-neutral-500"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-[-0.06em] sm:text-4xl ${
          invert ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
