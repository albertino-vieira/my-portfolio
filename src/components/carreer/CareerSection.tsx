const jobDetails = [
  {
    title: "Lead Full Stack Developer · Hitachi Digital Services",
    period: "Oct 2023 – Present",
    bullets: [
      "Migrated multiple applications and backend systems to Azure, improving scalability and reliability.",
      "Upgraded the company website to Gatsby v5 and delivered new React features with measurable performance gains.",
      "Led rebranding and technical initiatives to improve consistency, productivity, and delivery quality.",
    ],
  },
  {
    title: "Guest Lecturer · Escola Superior de Tecnologia e Gestão de Felgueiras",
    period: "Sep 2023 – Present",
    bullets: [
      "Lectured on Graphical Interface Conception and Operating Systems Fundamentals.",
      "Taught Databases and mentored student internships with practical industry guidance.",
    ],
  },
  {
    title: "Full Stack Developer · Runtime Revolution",
    period: "Oct 2021 – Oct 2023",
    bullets: [
      "Delivered product visualization features and a high-impact renewable energy project.",
      "Led MVP development, mobile app improvements, and Nx migration for streamlined workflows.",
    ],
  },
  {
    title: "Full Stack Developer · Porto Editora",
    period: "Jan 2020 – Sep 2021",
    bullets: [
      "Built and evolved Escola Virtual products and core administration platforms.",
      "Led a team of three developers, improved code quality through reviews, and shipped scalable backend features.",
    ],
  },
];

const CareerSection = () => {
  return (
    <section id="career" className="py-14" aria-labelledby="career-title">
      <h2 id="career-title" className="text-4xl font-bold text-white mb-10">
        Career
      </h2>
      <ol className="relative border-s border-slate-700 space-y-10 pl-6">
        {jobDetails.map((job) => (
          <li key={job.title} className="text-white">
            <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full bg-primary-500" />
            <div className="bg-[#171717] border border-slate-800 rounded-xl p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-sm text-primary-300 font-medium">{job.period}</p>
              </div>
              <ul className="list-disc pl-5 text-[#ADB7BE] space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default CareerSection;
