const Skills = () => {
  const skills = [
    { name: "HTML", logo: "/html.png" },
    { name: "Css", logo: "/css.png" },
    { name: "Scss", logo: "/scss.png" },
    { name: "Bootstrap", logo: "/bootstrap.png" },
    { name: "Tailwind", logo: "/tailwind.png" },
    { name: "JavaScript", logo: "/js.png" },
    { name: "React Js", logo: "/react.png" },
    { name: "Next.js", logo: "/next.png" },
    { name: "Git", logo: "/git.png" },
    { name: "GitHub", logo: "/github.png" },
    { name: "Firebase", logo: "/firebase.png" },
    { name: "Redux", logo: "/redux.png" },
  ];

  return (
    <div className="skills" id="skills1">
      <div className="flex flex-col ml-10 mt-16 pt-20 pb-20 items-center skills-sec">
        <h1 className="text text-3xl mb-10">
          My <span className=" myComponent">Skills</span>
        </h1>

        <div className="container">
          <div className="skillsContainer">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <img src={skill.logo} alt={skill.name} className="logo" />
                <span className="mt-3">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
