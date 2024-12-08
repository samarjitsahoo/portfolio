import React, { useMemo } from "react";
import "./Tech.scss";

const Tech = () => {
  const techStack = useMemo(
    () => [
      {
        id: "tech1",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        alt: "C Language",
      },
      {
        id: "tech2",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        alt: "C++",
      },
      {
        id: "tech3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        alt: "Java",
      },
      {
        id: "tech4",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        alt: "Python",
      },
      {
        id: "tech5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        alt: "HTML",
      },
      {
        id: "tech6",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        alt: "CSS",
      },
      {
        id: "tech7",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
      },
      {
        id: "tech8",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        alt: "Tailwind CSS",
      },
      {
        id: "tech9",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        alt: "SCSS",
      },
      {
        id: "tech10",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        alt: "React",
      },
      {
        id: "tech11",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        alt: "Node.js",
      },
      {
        id: "tech12",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        alt: "MongoDB",
      },
    ],
    []
  );

  return (
    <section id="skills" className="section light-background py-5">
      <div className="container section-title" data-aos="fade-up">
        <h2>Tech Stack</h2>
        <p className="justify">
          My technical skill set spans a broad spectrum of abilities, each
          crucial for thriving in the IT industry.
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="container-img" data-aos="fade-up" data-aos-delay="100">
          {techStack.map((tech) => (
            <div key={tech.id} id={tech.id} className="skills-img">
              <img
                src={tech.src}
                alt={tech.alt}
                loading="lazy"
                width="100"
                height="100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Tech);
