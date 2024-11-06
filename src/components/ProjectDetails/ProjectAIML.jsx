import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageSwiper from "./ImageSwiper";
import { aimlProjectInfo, aimlProjectDescriptions } from "./ProjectInfo";
import { imagesGroup4, imagesGroup5, imagesGroup6 } from "./ProjectImages";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectDetails.scss";

const ProjectAIML = () => {
  React.useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link
              onClick={() => navigate(-1)}
              className="me-2 d-flex align-items-center"
              role="button"
            >
              <i className="bi bi-arrow-left me-1 fs-4"></i>
            </Link>
            <h1 className="mb-2 mb-lg-0">Project Details</h1>
          </div>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Project Details</li>
            </ol>
          </nav>
        </div>
      </div>
      {aimlProjectInfo.map((project, index) => {
        let selectedImageGroup;
        if (index % 3 === 0) {
          selectedImageGroup = imagesGroup4;
        } else if (index % 3 === 1) {
          selectedImageGroup = imagesGroup5;
        } else {
          selectedImageGroup = imagesGroup6;
        }

        return (
          <section
            key={index}
            id="portfolio-details"
            className="portfolio-details section"
          >
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-8">
                  <ImageSwiper images={selectedImageGroup} />
                </div>
                <div className="col-lg-4">
                  <div
                    className="portfolio-info"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3>Project information</h3>
                    <ul>
                      <li>
                        <strong>Project Name</strong>: {project.name}
                      </li>
                      <li>
                        <strong>Project Category</strong>: {project.category}
                      </li>
                      <li>
                        <strong>Project URL</strong>:
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.url}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="portfolio-description"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h2>{aimlProjectDescriptions[index].title}</h2>
                    <p className="justify">
                      {aimlProjectDescriptions[index].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProjectAIML;
