import Link from "next/link";

const projects = [
  {
    title: "Agency Webisite",
    description: "HTML, Css, JavaScript",
    imageUrl: "/project3.png",
    live: "https://my-agency-site.netlify.app",
    git: "https://github.com/olubiyi09/my-agency-website",
  },
  {
    title: "Mshop E-commerce Website",
    description: "React, Scss, FireBase, Stripe",
    imageUrl: "/project2.png",
    live: "https://mshop.onrender.com/",
    git: "https://github.com/olubiyi09/FullStack-Ecommerce-shop",
  },
  {
    title: "Royal Bus Website",
    description: "React, Scss, Bootrap, FireBase, Stripe",
    imageUrl: "/project1.png",
    live: "https://royal-bus.onrender.com/",
    git: "https://github.com/olubiyi09/react-royal-bus-app",
  },
  {
    title: "Job Portal Application",
    description: "NextJs, MongoDB, CSS, Tailwind",
    imageUrl: "/job-portal.png",
    // live: "https://google-clone-nextjs13-iota.vercel.app/",
    live: "https://job-portal-app-lemon.vercel.app/",
    git: "https://github.com/olubiyi09/job-portal-app",
  },
  {
    title: "Pinvent web app",
    description: "React, Node, ExpressJs, MongoDB Scss",
    imageUrl: "/project5.png",
    live: "https://my-pinvent-app.onrender.com/",
    git: "https://github.com/olubiyi09/pinvent-app-frontend",
  },
  {
    title: "Auth app",
    description: "React, Node, ExpressJs, MongoDB Scss",
    imageUrl: "/project6.png",
    live: "https://my-new-auth-app.vercel.app/",
    git: "https://github.com/olubiyi09/mern-auth-app-frontend",
  },
];

const Projects = () => {
  return (
    <div className="mt-5" id="projects1">
      <div className="pl-10 pr-10 p">
        <h1 className="flex justify-center text text-3xl mb-10">
          <span className=" myComponent">Projects</span>
        </h1>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project card" key={index}>
              <div className="image-over">
                <img src={project.imageUrl} alt={project.title} />
                <div className="image-overlay">
                  <div className="pp">
                    <Link legacyBehavior href={project.live}>
                      <a target="_blank" rel="noopener noreferrer">
                        Visit website
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pl-2 pb-2">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex live-git">
                  <p className="dis">
                    <Link legacyBehavior href={project.live}>
                      <a target="_blank" rel="noopener noreferrer">
                        Visit Live
                      </a>
                    </Link>
                  </p>
                  <p className="my-ml-6">
                    <Link legacyBehavior href={project.git}>
                      <a target="_blank" rel="noopener noreferrer">
                        Github Repo
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
