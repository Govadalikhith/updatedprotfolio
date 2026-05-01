import { FiAward } from "react-icons/fi";
import { achievements } from "../data/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Achievements"
          title="Highlights beyond the code"
          subtitle="Workshops and initiatives that showcase curiosity and forward-thinking problem solving."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <Reveal key={item} delay={index * 120}>
              <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800/60 dark:bg-slate-900/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-indigo-300">
                    <FiAward />
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-200">
                    {item}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
