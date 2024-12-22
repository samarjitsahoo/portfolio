import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageSwiper from "./ImageSwiper";
import { webProjectInfo, webProjectDescriptions } from "./ProjectInfo";
import { imagesGroup1, imagesGroup2, imagesGroup3 } from "./ProjectImages";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectDetails.scss";

const ProjectWeb = () => {
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
      {webProjectInfo.map((project, index) => {
        let selectedImageGroup;
        if (index % 3 === 0) {
          selectedImageGroup = imagesGroup1;
        } else if (index % 3 === 1) {
          selectedImageGroup = imagesGroup2;
        } else {
          selectedImageGroup = imagesGroup3;
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
                        <strong>Name</strong>: {project.name}
                      </li>
                      <li>
                        <strong>Category</strong>: {project.category}
                      </li>
                      <li>
                        <strong>Website URL</strong>:&nbsp;
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Click here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="portfolio-description"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h2>{webProjectDescriptions[index].title}</h2>
                    <p className="justify">
                      {webProjectDescriptions[index].description}
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

export default ProjectWeb;
