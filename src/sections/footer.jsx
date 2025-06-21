import React from "react";
import { socialImgs } from "../constants/index";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <span>aliarman69720@gmail.com</span>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a key={img.url} className="icon" target="_blank" href={img.url}>
              <img src={img.imgPath} alt={img.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ali Arman. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
