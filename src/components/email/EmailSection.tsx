import GithubIcon from "../../assets/github-icon.svg";
import LinkedinIcon from "../../assets/linkedin-icon.svg";
import EmailForm from "./EmailForm";

const EmailSection = () => (
  <section
    id="contact"
    className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
  >
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    <div className="z-9">
      <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md">
        {" "}
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="socials flex flex-row gap-2">
        <a href="https://github.com/albertino-vieira" target="_blank">
          <img src={GithubIcon} alt="Github Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/albertino-vieira-7b9419135"
          target="_blank"
        >
          <img src={LinkedinIcon} alt="Linkedin Icon" />
        </a>
      </div>
    </div>
    <div className="z-9">
      <EmailForm />
    </div>
  </section>
);

export default EmailSection;
