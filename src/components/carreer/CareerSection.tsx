const jobs = [
  {
    title: "Lead Full Stack Developer",
    company: "Hitachi Digital Services",
    period: "Oct 2023 - Present",
    highlights: [
      "Migrated multiple applications and backend systems to Azure for better scalability.",
      "Upgraded the company website to Gatsby v5, improving performance and build efficiency.",
      "Led sprint planning and mentoring initiatives to boost delivery quality.",
    ],
  },
  {
    title: "Guest Lecturer",
    company: "Escola Superior de Tecnologia e Gestão de Felgueiras",
    period: "Sep 2023 - Present",
    highlights: [
      "Delivered courses in graphical interfaces, operating systems fundamentals, and databases.",
      "Mentored student internships with practical guidance and career support.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Runtime Revolution",
    period: "Oct 2021 - Oct 2023",
    highlights: [
      "Led MVP delivery and mobile product increments for commercial solutions.",
      "Spearheaded React refactor and migration to an Nx-based architecture.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Porto Editora",
    period: "Jan 2020 - Sep 2021",
    highlights: [
      "Designed and developed platforms for Escola Virtual, including admin systems and chat features.",
      "Directed a team of three developers while maintaining code review standards.",
    ],
  },
  {
    title: "Full Stack Developer (Freelancer)",
    company: "Independent Projects",
    period: "Jan 2018 - Dec 2019",
    highlights: [
      "Built MVPs in React and Node.js for business clients.",
      "Designed database solutions in MongoDB.",
    ],
  },
];

const CareerSection = () => {
  return (
    <section id="career" className="py-16" aria-label="Career timeline">
      <h2 className="text-4xl font-bold text-white mb-3">Experience</h2>
      <p className="text-[#ADB7BE] mb-10 max-w-3xl">
        A timeline of my work across product development, technical leadership, and teaching.
      </p>

      <div className="space-y-5">
        {jobs.map((job) => (
          <article
            key={`${job.title}-${job.company}`}
            className="rounded-2xl border border-slate-700 bg-[#161616] p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <h3 className="text-xl font-semibold text-white">
                {job.title} <span className="text-primary-400">· {job.company}</span>
              </h3>
              <p className="text-sm text-[#ADB7BE]">{job.period}</p>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-[#ADB7BE]">
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
