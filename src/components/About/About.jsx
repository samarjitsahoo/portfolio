import React from "react";
import "./About.scss";

const About = () => (
  <section id="about" className="about section">
    <div className="container section-title" data-aos="fade-up">
      <h2>About</h2>
      <p className="justify">
        I am an enthusiastic coder driven by an unyielding passion for
        programming. My journey in the world of technology is fueled by a deep
        curiosity and a commitment to mastering new technologies. I thrive on
        solving complex problems and continuously seek out challenges that push
        the boundaries of my knowledge and skills.
      </p>
    </div>
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4 text-center">
          <img
            src="https://res.cloudinary.com/dry07iyvo/image/upload/v1742979115/vicky_dq6y0b.png"
            className="img-fluid"
            style={{
              maxWidth: "80%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt="Profile"
          />
        </div>
        <div className="col-lg-8 content">
          <h2>Software Engineer</h2>
          <p className="py-3 justify">
            Being a Software Engineer means turning abstract ideas into
            tangible, working solutions. I find immense satisfaction in crafting
            the bridge between creativity and technology.
          </p>
          <div className="row">
            {[
              { label: "Degree", value: "Bachelor of Technology" },
              { label: "Email", value: "samarjit9203@gmail.com" },
              { label: "Website", value: "https://samarjit.vercel.app" },
              { label: "Address", value: "Cuttack, Odisha, India" },
            ].map((item, index) => (
              <div className="col-lg-6" key={index}>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>{item.label}:</strong> <span>{item.value}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <p className="py-3 justify">
            My dedication to programming is not just about writing code; it's
            about understanding the intricate details that make technology work.
            Whether it's exploring new languages, diving into innovative
            projects, or tackling difficult bugs, I am always eager to learn and
            grow in the ever-evolving landscape of software development.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
