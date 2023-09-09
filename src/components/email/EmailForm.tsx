import emailjs from "@emailjs/browser";
import { useState } from "react";

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
  };

  const handleSubmit = () => {
    const { subject, email, message } = contactState;
    if (subject !== "" && email !== "" && message !== "") {
      emailjs
        .send(
          import.meta.env.REACT_APP_SERVICE_ID!,
          import.meta.env.REACT_APP_TEMPLATE_ID!,
          { ...contactState },
          import.meta.env.REACT_APP_PUBLIC_KEY!
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
  );
};

export default EmailForm;
