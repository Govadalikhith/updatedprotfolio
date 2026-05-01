import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  focusAreas,
  heroStats,
  personalInfo,
  socialLinks,
} from "../data/data";
import Badge from "./Badge";
import ExternalLink from "./ExternalLink";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950 text-white"
    >
      <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-indigo-500/30 blur-[120px]" />
      <div className="absolute -right-10 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[160px]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-32 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <Badge className="bg-white/10 text-white">Full Stack Developer</Badge>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            {personalInfo.name}
          </h1>
          <p className="mt-4 text-lg text-slate-200">{personalInfo.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects <FiArrowUpRight />
            </a>
            <a href="/resume.pdf" className="btn-secondary" download>
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-300">
            <ExternalLink
              href={socialLinks.linkedin}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/30"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </ExternalLink>
            <ExternalLink
              href={socialLinks.github}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/30"
              aria-label="GitHub"
            >
              <FiGithub />
            </ExternalLink>
            <ExternalLink
              href={socialLinks.email}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/30"
              aria-label="Email"
            >
              <FiMail />
            </ExternalLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-card border-white/15 bg-white/5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 font-semibold">
                GL
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  Crafting Impact
                </p>
                <p className="text-lg font-semibold text-white">
                  {personalInfo.role}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm"
                >
                  <p className="text-xs uppercase text-slate-300">{stat.label}</p>
                  <p className="mt-2 text-base font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
                Focus Areas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-200">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
            Let’s connect for impactful builds
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
