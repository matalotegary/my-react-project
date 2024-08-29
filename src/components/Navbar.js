import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="z-10  w-full mx-auto flex justify-center op-0 bg-white">
      <ul className="flex">
        <li className="m-8 text-xl font-light hover:cursor-pointer hover:font-normal">
          <Link
            to="about-me"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li className="m-8 text-xl font-light hover:cursor-pointer hover:font-normal">
          <Link
            to="projects"
            offset={-50}
            spy={true}
            smooth={true}
            duration={500}
          >
            My Projects
          </Link>
        </li>
        <li className="m-8 text-xl font-light hover:cursor-pointer hover:font-normal">
          <Link to="reach-me" spy={true} smooth={true} duration={500}>
            Reach Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
