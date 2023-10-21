import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const IntroSection = () => {
  const profileImg = "https://res.cloudinary.com/dhikuxujd/image/upload/v1697325659/aoububaaf6zrzxntwzqt.png"
  return (
    <div className="intro mt-16" id="home1">
      <div className="intro-wrapper">
        <div className="img-wrapper">
          <div className="img-bg">
            <Image src={profileImg} alt="seyi image" width={230} height={1} />
          </div>
        </div>
        <h1 className="font-semibold text-4xl mt-5">
          MESHACH <span>OKEDIYA</span>
        </h1>

        <p className="text-white mt-2 text-lg">I'm a front-end developer</p>

        <div className="flex mt-5  social">
          <Link legacyBehavior href="https://github.com/olubiyi09">
            <a target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} color="#fff" />
            </a>
          </Link>

          <Link legacyBehavior href="https://twitter.com/its_Seyistrings">
            <a target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} color="#fff" />
            </a>
          </Link>

          <Link
            legacyBehavior
            href="https://www.linkedin.com/in/okediya-olubiyi-252636219/"
          >
            <a target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} color="#fff" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
