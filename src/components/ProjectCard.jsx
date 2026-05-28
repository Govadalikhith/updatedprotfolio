import { FiArrowUpRight, FiGithub, FiShoppingBag, FiCode } from "react-icons/fi";
import Badge from "./Badge";
import ExternalLink from "./ExternalLink";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800/60 dark:bg-slate-900/40">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-400/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-sm dark:bg-indigo-500/20 dark:text-indigo-400">
              {project.type === "ecommerce" ? (
                <FiShoppingBag className="h-6 w-6" />
              ) : (
                <FiCode className="h-6 w-6" />
              )}
            </div>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <Badge className="bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/30">
            {project.type === "ecommerce" ? "eCommerce" : "Full Stack"}
          </Badge>
        </div>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {project.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
              {detail}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200/60 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <ExternalLink href={project.live} className="btn-primary">
            Live Demo <FiArrowUpRight />
          </ExternalLink>
          <ExternalLink href={project.github} className="btn-secondary">
            View Code <FiGithub />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
