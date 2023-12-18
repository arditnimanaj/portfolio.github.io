import React, { useState } from "react";
import profilePicture from "./profilepic.jpg";
import Typewriter from "typewriter-effect";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

function Hero() {
  return (
    <div id="#about" className="ml-20">
      <div className="flex w-full justify-between p-6">
        <div className="flex mr-14 gap-3 items-center">
          <a
            target="_blank"
            href="https://github.com/arditnimanaj"
            className="hover:cursor-pointer text-orange-400"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              className="hover:text-orange-400 hover:cursor-pointer"
            />
          </a>

          <a
            target="_blank"
            href="https://www.facebook.com/ardit.nimanaj.7/"
            className="hover:cursor-pointer text-orange-400"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="xl"
              className="hover:text-orange-400 hover:cursor-pointer"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ardit-nimanaj-5224781b6/"
            className="hover:cursor-pointer text-orange-400"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className="hover:text-orange-400 hover:cursor-pointer"
            />
          </a>
          <a
            target="_blank"
            href="mailto:arditnimanaj@gmail.com"
            className="hover:cursor-pointer text-orange-400"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className="hover:text-orange-400 hover:cursor-pointer"
            />
          </a>
        </div>
        <div className="hover:rounded-2xl hover:cursor-pointer border rounded-lg p-2 text-orange-400 font-bold text-lg border-orange-400 flex gap-2">
          <span>
            <FontAwesomeIcon icon={faFile} size="md" />
          </span>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/12KR_m5ZLX5JqKoaqOHbbrJ4TkLixaeDb/view?usp=sharing"
          >
            <span className="font-lilita">Resume</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col text-white text-2xl text-center items-center font-bold  w-full gap-2 max-sm:gap-7">
        <img
          src={profilePicture}
          className="w-[200px] rounded-full opacity-50 hover:opacity-100"
        />
        <h1 className="font-bold">Hi, I'm Ardit.</h1>
        <span className="text-orange-400">Frontend Developer</span>
        <span className="w-full max-sm:w-[200px] max-sm:h-[55px]">
          <Typewriter
            options={{
              strings: [
                "I am a graduate engineer !",
                "I enjoy LoFi music !",
                "I enjoy coding & problem solving !",
                "Keep scrolling !",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <a href="#contact">
          <div className="hover:rounded-xl  hover:cursor-pointer border rounded-lg p-4 text-[#111827] hover:text-white bg-orange-400 font-bold text-lg border-orange-400">
            Contact Me
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
