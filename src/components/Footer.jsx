import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo, socialLinks } from "../data/data";
import ExternalLink from "./ExternalLink";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/60 bg-white py-8 text-sm text-slate-600 dark:border-slate-800/60 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <ExternalLink
            href={socialLinks.linkedin}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-white text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </ExternalLink>
          <ExternalLink
            href={socialLinks.github}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-white text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-300"
            aria-label="GitHub"
          >
            <FiGithub />
          </ExternalLink>
          <ExternalLink
            href={socialLinks.email}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-white text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-300"
            aria-label="Email"
          >
            <FiMail />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
