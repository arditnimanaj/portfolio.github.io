import React from "react";

function SideBar() {
  return (
    <div className="left-0 fixed top-0  bg-[#111827] max-w-sm">
      <div className="w-full p-2 mt-2">
        <h1 className="text-orange-200 text-xl text-center">dev.ardit</h1>
      </div>
      <ul className="my-auto  h-screen justify-around flex flex-col text-gray-300 text-xl uppercase py-4 ">
        <li className="hover:text-orange-400 hover:cursor-pointer rotate-90">
          About
        </li>
        <li className="hover:text-orange-400 hover:cursor-pointer rotate-90">
          Projects
        </li>
        <li className="hover:text-orange-400 hover:cursor-pointer rotate-90">
          Contact
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
