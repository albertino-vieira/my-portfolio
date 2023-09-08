import GithubIcon from "../assets/github-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";
import emailjs from '@emailjs/browser';
import { useState } from "react";

interface ContactState {
  subject: string;
  email: string;
  message: string
}


const EmailSection = () => {
  const [contactState, setContactState] = useState<ContactState>({ subject: '', email: '', message: '' })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setContactState({ ...contactState, [name]: value });
  }

  const handleSubmit = () => {
      const { subject, email, message } = contactState;
      if (subject !== '' && email !== '' && message !== '') {
          emailjs.send(import.meta.env.REACT_APP_SERVICE_ID!, import.meta.env.REACT_APP_TEMPLATE_ID!, { ...contactState }, import.meta.env.REACT_APP_PUBLIC_KEY!)
              .then(() => {
                  alert('Email sent!');
              }, () => {
                  alert('Error try again later!');
              });
      }
  }
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-9">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/albertino-vieira" target="_blank">
            <img src={GithubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/albertino-vieira-7b9419135" target="_blank">
            <img src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div className="z-9">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            onSubmit={handleSubmit}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection