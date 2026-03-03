import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) => (
  <div className="rounded-xl overflow-hidden border border-slate-700 bg-[#161616]">
    <div
      className="h-52 md:h-64 relative group bg-cover bg-center"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
        <a
          href={gitUrl}
          target="_blank"
          rel="noreferrer"
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          aria-label={`View ${title} source code`}
        >
          <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
        </a>
        <a
          href={previewUrl}
          className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          aria-label={`View ${title} live preview`}
        >
          <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
        </a>
      </div>
    </div>
    <div className="text-white py-6 px-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#ADB7BE]">{description}</p>
    </div>
  </div>
);

export default ProjectCard;
