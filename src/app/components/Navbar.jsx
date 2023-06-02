"use client";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-2 md:block">
              {/* LOGO */}
              <Image src="/logo.png" alt="logo image" width={150} height={10} />
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineCloseCircle color="#ff1403" size={38} />
                  ) : (
                    <GiHamburgerMenu color="#ff1403" size={30} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900   md:hover:bg-transparent">
                  <Link
                    to="home1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    Home
                  </Link>
                </li>
                <li className="pb text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:bg-transparent">
                  <Link
                    to="about-me1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    About Me
                  </Link>
                </li>
                <li className="pb text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:bg-transparent">
                  <Link
                    to="skills1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    Skills
                  </Link>
                </li>
                <li className="pb  text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:bg-transparent">
                  <Link
                    to="projects1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="pb  text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:bg-transparent">
                  <Link
                    to="contact1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
