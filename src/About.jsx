import React from "react";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { technologies } from "./data";
import { learningTechnologies } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About() {
  return (
    <div
      className="flex flex-col justify-center items-center text-white ml-24 my-20 gap-10"
      id="about"
    >
      <h1 className="text-5xl">
        About me<span className="text-orange-400 ">.</span>
      </h1>

      <div className="flex justify-around w-full max-sm:flex-col">
        <div className="max-w-md max-sm:mx-4">
          <span className="text-lg">
            Greetings! I'm Ardit Nimanaj, a passionate and detail-oriented
            Website Developer on a journey to transform ideas into captivating
            digital experiences. Armed with a Bachelor's degree in Electrical
            and Computer Engineering from the University of Prishtina, I've
            honed my skills in HTML/CSS, JS and ReactJS to craft seamless and
            visually appealing web applications. I'm not just satisfied with my
            current skills; I'm committed to growth. I'm always ready to embrace
            new technologies and challenges. If you're seeking a dynamic Website
            Developer with a blend of technical prowess and creative
            problem-solving, let's collaborate!
          </span>
        </div>

        <div className="max-w-md mr-4 max-sm:mx-4 max-sm:mt-4">
          <div className="flex flex-col gap-2">
            <h1 className=" font-bold text-orange-400">
              Languages / Framework
            </h1>
            <div className="flex flex-wrap gap-2 max-w-md">
              {technologies.map((technology) => {
                return (
                  <>
                    <div className="border rounded-2xl p-2 hover:text-orange-400 hover:cursor-pointer hover:border-orange-400">
                      {technology}
                    </div>
                  </>
                );
              })}
            </div>

            <h1 className=" font-bold text-orange-400">Currently learning</h1>
            <div className="flex gap-2 max-w-md">
              {learningTechnologies.map((technology) => {
                return (
                  <>
                    <div className="border rounded-2xl p-2 hover:text-orange-400 hover:cursor-pointer hover:border-orange-400">
                      {technology}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
