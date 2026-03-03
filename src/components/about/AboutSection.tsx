import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Working from "../../assets/workingcom.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 gap-2 list-disc pl-5 text-[#ADB7BE]">
        <li>React & Next.js</li>
        <li>TypeScript & JavaScript</li>
        <li>Node.js & GraphQL</li>
        <li>React Native</li>
        <li>Azure DevOps & Pipelines</li>
        <li>MongoDB & CosmosDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-[#ADB7BE]">
        <li>Master&apos;s in Computer Engineering (2019 - Present)</li>
        <li>Bachelor&apos;s in Computer Engineering (2018)</li>
        <li>School of Technology and Management, Felgueiras</li>
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
    <section className="text-white" id="about" aria-label="About Albertino Vieira">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-10 px-4 xl:gap-16 sm:py-16">
        <img
          className="rounded-3xl border border-slate-700"
          alt="Albertino working"
          src={Working}
          width={550}
          height={600}
          loading="lazy"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] leading-relaxed">
            I help companies launch and evolve digital products with a practical mix of
            engineering leadership and hands-on development. In recent years, I have led
            migrations to Azure, improved application performance, and supported teams in
            shipping reliable web and mobile experiences.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 my-6">
            <div className="rounded-xl border border-slate-700 p-4 bg-[#171717]">
              <p className="text-2xl font-bold text-white">7+</p>
              <p className="text-sm text-[#ADB7BE]">Years of experience</p>
            </div>
            <div className="rounded-xl border border-slate-700 p-4 bg-[#171717]">
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="text-sm text-[#ADB7BE]">Delivered features & MVPs</p>
            </div>
            <div className="rounded-xl border border-slate-700 p-4 bg-[#171717]">
              <p className="text-2xl font-bold text-white">3x</p>
              <p className="text-sm text-[#ADB7BE]">Products migrated at scale</p>
            </div>
          </div>

          <div className="flex flex-row justify-start mt-2">
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
          <div className="mt-6">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
