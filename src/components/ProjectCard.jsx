import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Badge from "./Badge";
import ExternalLink from "./ExternalLink";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800/60 dark:bg-slate-900/40">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-400/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <Badge className="bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-indigo-300">
            Case Study
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
