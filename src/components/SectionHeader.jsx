const SectionHeader = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`mb-10 flex flex-col gap-3 ${alignment}`}>
      {eyebrow && <span className="badge">{eyebrow}</span>}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
