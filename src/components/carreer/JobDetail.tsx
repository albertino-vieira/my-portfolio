interface JobDetailProps {
  jobTitle: string;
  bullets: string[];
}
const JobDetail = ({ jobTitle, bullets }: JobDetailProps) => {
  return (
    <div className="md:grid md:grid-cols-[30%_70%] gap-8 md:items-center py-5 px-4 xl:gap-16 sm:py-16">
      <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 ">{jobTitle}</p>
      <ul className="list-disc p-5">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDetail;
