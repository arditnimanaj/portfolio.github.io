import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="ml-24 flex flex-col h-fit mb-24 text-center gap-9 overflow-hidden max-sm:px-3"
    >
      <h1 className="text-5xl text-white  w-full">
        Contact<span className="text-orange-400 ">.</span>
      </h1>
      <h3 className="text-white text-2xl max-w-2xl mx-auto">
        Hey, send me an email if you want to connect! Additionally, you can find
        me on{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ardit-nimanaj-5224781b6/"
          className="hover:cursor-pointer text-orange-400"
        >
          LinkedIn
        </a>{" "}
        , shoot a message if you have to!
      </h3>
      <div className=" items-center">
        <a
          href="mailto:arditnimanaj@gmail.com"
          className="items-center text-center"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="xl"
            className="hover:cursor-pointer text-orange-400 mb-[1px]"
          />
          <span className="ml-4 text-3xl font-extrabold font-mono text-orange-400 max-sm:text-xl max-sm:mr-2">
            arditnimanaj@gmail.com
          </span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
