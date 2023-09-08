import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Working from "../assets/working.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>React Native</li>
        <li>Typescript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor in Software engineering</li>
        <li>Working on Masters in Software engineering</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [_, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-5 px-4 xl:gap-16 sm:py-16 xl:pr-16">
        <img
          className="rounded-3xl"
          alt="working"
          src={Working}
          width={550}
          height={600}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Full Stack Developer with 5 years of experience in
            software engineering and development. My expertise lies in
            designing, developing, and troubleshooting high-performance web
            applications. I excel in problem-solving and debugging software, and
            I have a knack for crafting technical solutions from the ground up.
            My technology stack includes: React: Proficient in building
            interactive and user-friendly web interfaces. TypeScript: Skilled in
            using TypeScript to enhance code quality and robustness. React
            Native: Experienced in developing cross-platform mobile applications
            for both iOS and Android. Node.js: Well-versed in building scalable
            server-side solutions for efficient backend development. With this
            diverse skill set, I am well-prepared to tackle the entire software
            development process, from creating responsive web applications to
            crafting mobile solutions and scalable backend systems. My 5 years
            of experience have equipped me to deliver high-quality software
            efficiently and effectively.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((t) => (
              <TabButton
                handleSelectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {" "}
                {t.title}{" "}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
