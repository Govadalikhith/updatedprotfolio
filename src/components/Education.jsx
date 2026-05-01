import { FiBookOpen } from "react-icons/fi";
import { education } from "../data/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const Education = () => {
  return (
    <section id="education" className="section section-muted">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation"
          subtitle="A consistent focus on computer science fundamentals with strong academic performance."
        />

        <div className="space-y-6">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 100}>
              <div className="relative rounded-3xl border border-slate-200/60 bg-white p-6 shadow-soft dark:border-slate-800/60 dark:bg-slate-900/40">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-indigo-300">
                      <FiBookOpen />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.degree}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {item.years}
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {item.score}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
