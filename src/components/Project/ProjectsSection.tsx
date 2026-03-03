import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import under from "../../assets/under-construction.jpg";
import Dashboard from "../../assets/dashboard.png";
const Tags = ["All", "Web", "Mobile"];

const projectsData = [
  {
    id: 1,
    title: "Next.js Dashboard",
    description: "Admin dashboard with authentication, analytics, and responsive UI.",
    image: Dashboard,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/albertino-vieira/nextjs-dashboard",
    previewUrl: "https://nextjs-dashboard-lyart-pi-47.vercel.app/",
  },
  {
    id: 2,
    title: "New Case Study Coming Soon",
    description: "Currently preparing a detailed case study from a recent enterprise project.",
    image: under,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-6">
        Featured Projects
      </h2>
      <p className="text-center text-[#ADB7BE] max-w-2xl mx-auto mb-8">
        A selection of web and mobile work focused on performance, usability, and business outcomes.
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {Tags.map((element) => (
          <ProjectTag
            key={element}
            onClick={handleTagChange}
            name={element}
            isSelected={tag === element}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
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
