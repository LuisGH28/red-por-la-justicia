type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full bg-white px-4 py-1 text-xs font-semibold text-[#061d49] shadow-sm ring-1 ring-[#061d49]/10">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-[#061d49] md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
