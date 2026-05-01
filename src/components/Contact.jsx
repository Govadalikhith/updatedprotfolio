import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { personalInfo, socialLinks } from "../data/data";
import ExternalLink from "./ExternalLink";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section id="contact" className="section section-muted">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something meaningful"
          subtitle="Reach out for collaborations, product ideas, or a quick chat about solving real-world problems."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-soft dark:border-slate-800/60 dark:bg-slate-900/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-indigo-300">
                <FiMail />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Email</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {personalInfo.email}
              </p>
              <ExternalLink href={socialLinks.email} className="btn-ghost mt-4">
                Send Email
              </ExternalLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-soft dark:border-slate-800/60 dark:bg-slate-900/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-indigo-300">
                <FiPhone />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Phone</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {personalInfo.phone}
              </p>
              <ExternalLink
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="btn-ghost mt-4"
              >
                Call Now
              </ExternalLink>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-soft dark:border-slate-800/60 dark:bg-slate-900/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-indigo-300">
                <FiSend />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Social</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Let’s connect on professional platforms.
              </p>
              <div className="mt-4 flex gap-3">
                <ExternalLink href={socialLinks.linkedin} className="btn-ghost">
                  LinkedIn
                </ExternalLink>
                <ExternalLink href={socialLinks.github} className="btn-ghost">
                  GitHub
                </ExternalLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
