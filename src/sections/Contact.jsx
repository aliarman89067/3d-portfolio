import React from "react";
import TitleHeader from "../components/titleHeader";
import ContactForm from "../components/contactForm";
import ComputerModel from "../components/models/contactComputer/computerModel";

const Contact = () => {
  return (
    <div id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch With Me"
          sub="My contact Information"
        />
        <div className="flex flex-col xl:flex-row mt-16 gap-10">
          <div className="w-5/12">
            <ContactForm />
          </div>
          <div className="w-7/12 flex items-center justify-center">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden flex items-center justify-center">
              <ComputerModel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
