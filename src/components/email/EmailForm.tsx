import emailjs from "@emailjs/browser";
import { ButtonHTMLAttributes, useState } from "react";

interface ContactState {
  subject: string;
  email: string;
  message: string;
}

const EmailForm = () => {
  const [contactState, setContactState] = useState<ContactState>({
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactState({ ...contactState, [name]: value });
    console.log(name, value );
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { subject, email, message } = contactState;
    console.log(subject, email, message);
    if (subject !== "" && email !== "" && message !== "") {
      emailjs
        .send(
          import.meta.env.VITE_APP_SERVICE_ID!,
          import.meta.env.VITE_APP_TEMPLATE_ID!,
          { ...contactState },
          import.meta.env.VITE_APP_PUBLIC_KEY!
        )
        .then(
          () => {
            alert("Email sent!");
          },
          () => {
            alert("Error try again later!");
          }
        );
    }
  };
  return (
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
          name="email"
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
          name="subject"
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
        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        onClick={handleSubmit}
      >
        Send Message
      </button>
    </form>
  );
};

export default EmailForm;
