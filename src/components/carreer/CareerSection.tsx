import { Carousel } from "flowbite-react";
import JobDetail from "./JobDetail";

const JobDetails = [
  {
    jobTitle:
      "Fullstack Developer at RuntimeRevolution (October2021-September2023, Remote)",
    bullets: [
      "Collaborated with a company specializing in product visualizations for rooms.",
      "Executed a project for a renewable energy company.",
      "Lead the creation of an MVP (Minimum Viable Product) for a specific product, leading a team of 2 developers.",
      "Concentrated on mobile development, primarily encompassing version increments and updates to the mobile app.",
      "Additionally contributed to the main project by actively participating in the refactor of the React web app to enhance product quality and performance.",
      "Supported the team in migrating all products to an Nx-based solution.",
    ],
  },
  {
    jobTitle:
      "Fullstack Developer at PortoEditora (January2020-September2021, Porto,Portugal)",
    bullets: [
      "Engineered apps for EscolaVirtual and orchestrated the overhaul of the administration platform.",
      "Orchestrated a team of 3 members to architect a platform for the management of Escola Virtual (evAdmin).",
      "Oversaw node development as a core responsibility, crafted React solutions including a chat system, and constructed two administrative platforms.",
      "Instituted code reviews for all React projects within the team.",
    ],
  },
  {
    jobTitle:
      "Fullstack Developer (September2018-December2019, Lousada,Portugal)",
    bullets: [
      "Conceptualized and crafted an app from inception to the final version.",
      "Constructed an app for locating specific wines in nearby restaurants or wine cellars, employing Android and Swift for mobile development, React for the admin page, and Node.js for backend functionality.",
      "Designed and implemented the database using MongoDB.",
    ],
  },
];

const CareerSection = () => {
  return (
    <section id="career">
      <h2 className="text-4xl font-bold text-white mb-4">Career</h2>{" "}
      <Carousel
        className="h-[500px] rounded-full w-full px-2 text-white"
        slideInterval={5000}
      >
        {JobDetails.map((job) => (
          <div key={job.jobTitle} className="w-[90%]">
            <JobDetail jobTitle={job.jobTitle} bullets={job.bullets} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CareerSection;
