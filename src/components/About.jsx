import { FiLayers, FiTrendingUp, FiZap } from "react-icons/fi";
import { highlights, personalInfo } from "../data/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const iconMap = [FiLayers, FiTrendingUp, FiZap];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About"
          title="A builder focused on clarity and impact"
          subtitle={personalInfo.summary}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <Reveal key={item.title} delay={index * 120}>
                <div className="rounded-3xl border border-slate-200/50 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800/60 dark:bg-slate-900/40">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-indigo-300">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
