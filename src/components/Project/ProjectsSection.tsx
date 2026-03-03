import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Dashboard from "../../assets/dashboard.png";
import under from "../../assets/under-construction.jpg";
import portfolio from "../../assets/working.png";

const Tags = ["All", "Web", "Mobile"];

const projectsData = [
  {
    id: 1,
    title: "Next.js Dashboard",
    description: "Interactive dashboard with authentication, analytics, and modern UI patterns.",
    image: Dashboard,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/albertino-vieira/nextjs-dashboard",
    previewUrl: "https://nextjs-dashboard-lyart-pi-47.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "SEO-focused portfolio showcasing experience, projects, and contact workflow.",
    image: portfolio,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/albertino-vieira",
    previewUrl: "#home",
  },
  {
    id: 3,
    title: "Mobile Product Work",
    description: "React Native delivery work with performance improvements and regular feature releases.",
    image: under,
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/albertino-vieira",
    previewUrl: "#contact",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <section id="projects" className="py-16" aria-label="Featured projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">Featured Projects</h2>
      <p className="text-center text-[#ADB7BE] max-w-2xl mx-auto mb-8">
        Selected work across web and mobile products, focused on scalability, UX, and measurable impact.
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-3">
        {Tags.map((element) => (
          <ProjectTag
            key={element}
            onClick={setTag}
            name={element}
            isSelected={tag === element}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-10 mt-6">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.35, delay: index * 0.15 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
