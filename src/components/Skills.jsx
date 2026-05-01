import { skills } from "../data/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  return (
    <section id="skills" className="section section-muted">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Modern tools with a full-stack mindset"
          subtitle="A balanced toolkit spanning frontend craft, backend reliability, and collaboration-ready workflows."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], index) => (
            <Reveal key={category} delay={index * 80}>
              <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-soft dark:border-slate-800/60 dark:bg-slate-900/40">
                <h3 className="text-lg font-semibold">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="badge normal-case tracking-normal">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
