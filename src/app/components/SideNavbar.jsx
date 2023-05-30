// "use client";
// import React, { useState } from "react";
// import "../globals.css";
// import Image from "next/image";
// import classNames from "classnames";
// import {
//   IoIosArrowDropleftCircle,
//   IoIosArrowDroprightCircle,
// } from "react-icons/io";
// import { FaHome, FaRegAddressCard } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import { AiOutlineProject } from "react-icons/ai";
// import { BiCodeAlt } from "react-icons/bi";
// import { Link } from "react-scroll/modules";

// const SideNavbar = () => {
//   const [toggleCollapse, setToggleCollapse] = useState(true);
//   const wrapperClasses = classNames(
//     `h-screen px-4 pt-8 pb-4 flex justify-between flex-col nav-header`,
//     {
//       ["w-80"]: !toggleCollapse,
//       ["w-20"]: toggleCollapse,
//     }
//   );

//   const collapsIconClasses = classNames("p-4 rounded absolute");
//   const handleSidebarToggle = () => {
//     setToggleCollapse(!toggleCollapse);
//   };

//   return (
//     <div
//       className={wrapperClasses}
//       style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
//     >
//       <div className="flex flex-col ">
//         <div className="flex items-center justify-between relative">
//           <div className="flex items-center pl-1 gap-4">
//             <h2
//               className={classNames("text-3xl font-medium logo", {
//                 hidden: toggleCollapse,
//               })}
//             >
//               <span className={toggleCollapse ? "hide" : ""}>
//                 <Image
//                   src="/logo.png"
//                   alt="logo image"
//                   width={150}
//                   height={0}
//                 />
//               </span>

//               <span className={!toggleCollapse ? "hide" : "n-show"}>
//                 <Image
//                   src="/logo2.png"
//                   alt="logo image"
//                   width={150}
//                   height={50}
//                 />
//               </span>
//             </h2>
//           </div>

//           <button
//             className={`${collapsIconClasses} col-btn`}
//             onClick={handleSidebarToggle}
//           >
//             {toggleCollapse ? (
//               <div>
//                 <IoIosArrowDroprightCircle size={24} />
//               </div>
//             ) : (
//               <div>
//                 <IoIosArrowDropleftCircle size={24} />
//               </div>
//             )}
//           </button>
//         </div>

//         <div className="flex">
//           <div className="flex flex-col items-start mt-24 nav-link">
//             <Link to="home1" spy={true} smooth={true} offset={0} duration={500}>
//               <span>
//                 <FaHome />
//               </span>
//               <p className={toggleCollapse ? "hide" : "n-hide"}>Home</p>
//             </Link>
//             <Link
//               to="about-me1"
//               spy={true}
//               smooth={true}
//               offset={50}
//               duration={500}
//             >
//               <span>
//                 <CgProfile />
//               </span>
//               <p className={toggleCollapse ? "hide" : "n-hide"}>About Me</p>
//             </Link>
//             <Link
//               to="skills1"
//               spy={true}
//               smooth={true}
//               offset={50}
//               duration={500}
//             >
//               <span>
//                 <BiCodeAlt />
//               </span>
//               <p className={toggleCollapse ? "hide" : "n-hide"}>Skills</p>
//             </Link>
//             <Link
//               to="projects1"
//               spy={true}
//               smooth={true}
//               offset={50}
//               duration={500}
//             >
//               <span>
//                 <AiOutlineProject />
//               </span>
//               <p className={toggleCollapse ? "hide" : "n-hide"}>Projects</p>
//             </Link>
//             <Link
//               to="contact1"
//               spy={true}
//               smooth={true}
//               offset={50}
//               duration={500}
//             >
//               <span>
//                 <FaRegAddressCard />
//               </span>
//               <p className={toggleCollapse ? "hide" : "n-hide"}>Contact Me</p>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideNavbar;
