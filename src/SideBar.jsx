import React from "react";
import { HashLink } from "react-router-hash-link";
import { useParams } from "react-router-dom";

function SideBar() {
  return (
    <div className="left-0 fixed top-0  bg-[#111827] max-w-sm">
      <div className="w-full p-2 mt-2">
        <HashLink smooth to="/#head">
          <h1 className="text-orange-200 text-xl text-center">dev.ardit</h1>
        </HashLink>
      </div>
      <ul className="my-auto  h-screen justify-around flex flex-col text-gray-300 text-xl uppercase py-4 ">
        <HashLink smooth to="/#about">
          <li className="hover:text-orange-400 hover:cursor-pointer rotate-90">
            About
          </li>
        </HashLink>
        <HashLink smooth to="/#projects">
          <li className="hover:text-orange-400 hover:cursor-pointer rotate-90">
            Projects
          </li>
        </HashLink>

        <HashLink smooth to="/#contact">
          <li className="hover:text-orange-400 hover:cursor-pointer rotate-90">
            Contact
          </li>
        </HashLink>
      </ul>
    </div>
  );
}

export default SideBar;
