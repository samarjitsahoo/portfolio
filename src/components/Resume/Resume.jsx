import React from "react";
import "./Resume.scss";

const Resume = () => {
  const contactInfo = [
    "samarjit9203@gmail.com",
    "https://samarjit.vercel.app",
    "linkedin.com/in/samarjitsahoo",
    "github.com/samarjitsahoo",
  ];
  const education = [
    {
      title: "Bachelor of Technology",
      duration: "2021 - 2025",
      institution: "DRIEMS University",
      description:
        "During my B.Tech, I immersed myself in hands-on projects involving modern programming languages, software development tools, and system design. This practical experience helped me build a solid technical foundation and prepared me for real-world challenges in the IT field.",
    },
    {
      title: "Higher Secondary Education",
      duration: "2018 - 2021",
      institution: "Ravenshaw University",
      description:
        "During my higher education, I focused on the fundamentals of computer science, including basic programming concepts, software development, and system operations. This solid foundation has prepared me for practical applications and further growth in the IT field.",
    },
    {
      title: "Matriculation",
      duration: "2018",
      institution: "Kendriya Vidyalaya",
      description:
        "During my matriculation, I laid the groundwork with core subjects in computer science, learning the essentials of programming, hardware, and software basics. This early education provided me with a solid start in the IT field.",
    },
  ];
  const internships = [
    {
      company: "NovaNectar Services Pvt. Ltd.",
      duration: "June 2024",
      location: "Dehradun, Uttarakhand, India",
      responsibilities: [
        "Developed a face detection model using Python and OpenCV, achieving high accuracy in identifying and localizing faces in images and video streams.",
        "Created a predictive model for estimating car prices based on various features such as make, model, year, and mileage using machine learning algorithms like Linear Regression and Decision Trees.",
        "Implemented data preprocessing techniques and model training processes to enhance the model performance, accuracy, and efficiency.",
      ],
    },
    {
      company: "OctaNet Services Pvt. Ltd.",
      duration: "April 2024",
      location: "Bhubaneshwar, Odisha, India",
      responsibilities: [
        "Designed and developed a responsive landing page for the company using HTML, CSS, and JavaScript.",
        "Created a fully functional to-do list application with CRUD (Create, Read, Update, Delete) operations.",
        "Implemented modern design principles to enhance user experience and engagement.",
      ],
    },
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <a
          href="https://drive.google.com/uc?id=1D3qRmxsVeih2Ht6voj7IXV5kkd4Rch1p&export=download"
          className="icon resume"
          target="_blank"
          download="Resume"
          aria-label="Download Resume"
        >
          <i className="bi bi-download"></i>
        </a>

        <p className="justify">
          I am an enthusiastic and dedicated IT graduate with a solid foundation
          in programming and software development. I am eager to leverage my
          skills to contribute to innovative projects and solutions. Committed
          to continuous learning and growth, I aim to apply my technical
          knowledge and problem-solving abilities in a dynamic work environment
          where I can collaborate with experienced professionals and drive
          impactful results.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Samarjit Sahoo</h4>
              <p className="justify">
                I am an aspiring and passionate IT professional with a strong
                foundation in programming and software development. I recently
                graduated with a degree in Computer Science and Engineering.
              </p>
              <ul>
                {contactInfo.map((contact, index) => (
                  <li key={index}>{contact}</li>
                ))}
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            {education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.title}</h4>
                <h5>{edu.duration}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p className="justify">{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Internships</h3>
            {internships.map((internship, index) => (
              <div className="resume-item" key={index}>
                <h4>{internship.company}</h4>
                <h5>{internship.duration}</h5>
                <p>
                  <em>{internship.location}</em>
                </p>
                <ul>
                  {internship.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="justify">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
