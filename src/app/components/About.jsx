import Image from "next/image";
import { MdCall, MdEmail } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { BsChevronDoubleRight } from "react-icons/bs";
import Link from "next/link";

const About = () => {
  return (
    <div className="abt-sec " id="about-me1">
      <div className="flex justify-center abt">
        <div className="about-img">
          <div className="img pl-10">
            <Image src="/abt.png" alt="about image" width={300} height={40} />
          </div>
        </div>

        <div className="about-content leading-9">
          <p className="p-head">About Myself</p>
          <h1 className="text-3xl font-semibold mb-3">
            <span className="myComponent">About</span> Me, I'm a Developer
          </h1>
          <p className="leading-6 ">
            I'm Meshach Okediya, I am a dedicated front-end web developer from
            Oyo state, Nigeria. I have a solid background in HTML, CSS, and
            JavaScript, also competent in CSS frame works (Tailwind and
            Bootstrap) and also JavaScript library, React and Next Js the React
            frame work. Web development is more than just a profession for me,
            it's my passion, I love crafting my ideas into visually stunning and
            user friendly websites. I'm always thrilled to collaborate on
            interesting projects.
          </p>

          <div className="flex abt-d mt-4">
            <h2 className="flex justify-center items-center">
              <p className="mr-2">
                <MdCall size={20} color="#ff1403" />
              </p>
              Phone: +995599883700
            </h2>

            <h2 className="ml-7 flex justify-center items-center">
              <p className="mr-2">
                <MdEmail size={20} color="#ff1403" />
              </p>
              Email: olubiyi09@gmail.com
            </h2>
          </div>
          <div className="flex abt-btns mt-7 about-btn">
            <a
              href="https://drive.google.com/uc?export=download&id=1Iu0daV8pkQh0ax4nof7a11WkJ62qKZpj"
              download="Meshach_Resume.pdf"
              className="flex justify-center items-center btn-1 pl-5 pr-5 pb-1 pt-1"
            >
              <p className="mr-2">Download CV</p> <FaDownload size={15} />
            </a>

            <a href="#contact1" className="flex justify-center items-center btn-2 pl-5 pr-5 pb-1 pt-1 ml-7"><p className="mr-2">Contact Me</p>{" "}
              <BsChevronDoubleRight size={15} /></a>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
