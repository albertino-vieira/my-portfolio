import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Working from "../../assets/workingcom.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[#ADB7BE] list-disc pl-5">
        <li>React</li>
        <li>TypeScript</li>
        <li>React Native</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Azure DevOps</li>
        <li>GraphQL</li>
        <li>JavaScript</li>
        <li>Leadership</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 text-[#ADB7BE] space-y-2">
        <li>Bachelor in Software engineering</li>
        <li>Master&apos;s in Computer Engineering (ongoing)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about" aria-labelledby="about-title">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <img
          className="rounded-3xl border border-slate-800 shadow-xl"
          alt="Albertino working in software development"
          src={Working}
          width={550}
          height={600}
          loading="lazy"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 id="about-title" className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] leading-relaxed">
            I am a Lead Full Stack Developer with 7+ years of experience building
            high-performance web and mobile applications. I have led MVP
            initiatives, large-scale migrations, and rebranding efforts while
            mentoring teams and improving engineering delivery. My focus is on
            scalable architecture, clean code, and exceptional user experience.
          </p>

          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                handleSelectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
