import { HashLink } from "react-router-hash-link";

function SideBar() {
  return (
    <div className="left-0 fixed top-0  bg-[#111827] w-[80px] px-0">
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
