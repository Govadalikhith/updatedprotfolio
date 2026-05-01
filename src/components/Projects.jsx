import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work with real-world outcomes"
          subtitle="A snapshot of full-stack products built with a focus on performance, reliability, and user experience."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
