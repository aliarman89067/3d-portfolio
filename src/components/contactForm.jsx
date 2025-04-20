import React, { useRef, useState } from "react";
import emailJs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormChange = (e, type) => {
    const value = e.target.value;
    setFormState((prevState) => ({ ...prevState, [type]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsLoading(true);
    try {
      await emailJs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormState({
        email: "",
        message: "",
        name: "",
      });
    } catch (error) {
      console.log("Email Js Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-8 rounded-xl bg-black-100 w-full"
    >
      <label htmlFor="name" className="flex flex-col gap-2">
        Name
      </label>
      <input
        id="name"
        type="text"
        value={formState.name}
        className="bg-black-200 rounded-md w-full h-13 py-7 px-3 font-medium outline-none"
        onChange={(e) => handleFormChange(e, "name")}
      />
      <label htmlFor="email" className="flex flex-col gap-2">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={formState.email}
        className="bg-black-200 rounded-md w-full h-13 py-7 px-3 font-medium outline-none"
        onChange={(e) => handleFormChange(e, "email")}
      />
      <label htmlFor="message" className="flex flex-col gap-2">
        Message
      </label>
      <textarea
        id="message"
        type="text"
        value={formState.message}
        className="bg-black-200 rounded-md w-full h-36 resize-none py-4 px-3 font-medium outline-none"
        onChange={(e) => handleFormChange(e, "message")}
      />
      <button type="submit" disabled={isLoading}>
        <div className="cta-button group mt-3">
          <div className="bg-circle" />
          <p className="text">{isLoading ? "Sending..." : "Send Message"}</p>
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="Arrow" />
          </div>
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
