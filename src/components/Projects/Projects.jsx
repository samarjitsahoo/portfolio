import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import "./Projects.scss";

const Portfolio = () => {
  useEffect(() => {
    let iso;
    const lightbox = GLightbox({
      selector: ".glightbox",
    });
    const initializeIsotope = () => {
      iso = new Isotope(".isotope-container", {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        filter: ".filter-web",
      });
    };
    const imgLoad = imagesLoaded(".isotope-container");
    imgLoad.on("progress", () => {
      iso && iso.layout();
    });
    imgLoad.on("done", initializeIsotope);
    const filters = document.querySelectorAll(".portfolio-filters li");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
        filters.forEach((item) => item.classList.remove("filter-active"));
        this.classList.add("filter-active");
      });
    });
    return () => {
      filters.forEach((filter) =>
        filter.removeEventListener("click", () => {})
      );
      if (iso) iso.destroy();
    };
  }, []);

  return (
    <section id="projects" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects &rarr; Under Development</h2>
        <p className="justify">
          Take a look at my portfolio to see a diverse collection of projects
          that highlight my technical skills and problem-solving abilities. Each
          project reflects my commitment to innovation and my passion for
          creating effective, real-world solutions.
        </p>
      </div>
      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter=".filter-web"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter=".filter-web" className="filter-active">
              Web
            </li>
            <li data-filter=".filter-aiml">AI/ML</li>
            <li data-filter=".filter-api">API</li>
            <li data-filter=".filter-other">Other</li>
          </ul>
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img
                  src="https://raw.githubusercontent.com/samarjitsahoo/auction-platform/main/assets/home.png"
                  className="img-fluid"
                  alt="Web 1"
                />
                <div className="portfolio-info">
                  <h4>Auction Platform</h4>
                  <p>Full stack auction platform using MERN</p>
                  <a
                    href="https://raw.githubusercontent.com/samarjitsahoo/auction-platform/main/assets/home.png"
                    title="Web 1"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/web"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img src="/demo.jpg" className="img-fluid" alt="Web 2" />
                <div className="portfolio-info">
                  <h4>Website 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="/demo.jpg"
                    title="Web 2"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/web"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img src="/demo.jpg" className="img-fluid" alt="Web 3" />
                <div className="portfolio-info">
                  <h4>Website 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="/demo.jpg"
                    title="Web 3"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/web"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-aiml">
              <div className="portfolio-content h-100">
                <img
                  src="https://raw.githubusercontent.com/samarjitsahoo/house-price-prediction/main/assets/hpp-1.png"
                  className="img-fluid"
                  alt="AI/ML 1"
                />
                <div className="portfolio-info">
                  <h4>House Price Prediction</h4>
                  <p>House Price Prediction using Random Forest Regressor</p>
                  <a
                    href="https://raw.githubusercontent.com/samarjitsahoo/house-price-prediction/main/assets/hpp-1.png"
                    title="AI/ML 1"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/aiml"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-aiml">
              <div className="portfolio-content h-100">
                <img src="/demo.jpg" className="img-fluid" alt="AI/ML 2" />
                <div className="portfolio-info">
                  <h4>AI/ML 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="/demo.jpg"
                    title="AI/ML 2"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/aiml"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-aiml">
              <div className="portfolio-content h-100">
                <img src="/demo.jpg" className="img-fluid" alt="AI/ML 3" />
                <div className="portfolio-info">
                  <h4>AI/ML 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="/demo.jpg"
                    title="AI/ML 3"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/aiml"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-api">
              <div className="portfolio-content h-100">
                <img
                  src="https://raw.githubusercontent.com/samarjitsahoo/youtube-clone/main/assets/home.jpg"
                  className="img-fluid"
                  alt="API 1"
                />
                <div className="portfolio-info">
                  <h4>YouTube Clone</h4>
                  <p>YouTube Clone using YouTube data API v3</p>
                  <a
                    href="https://raw.githubusercontent.com/samarjitsahoo/youtube-clone/main/assets/home.jpg"
                    title="API 1"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/api"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-api">
              <div className="portfolio-content h-100">
                <img
                  src="https://raw.githubusercontent.com/samarjitsahoo/chatgpt-clone/main/assets/home.png"
                  className="img-fluid"
                  alt="API 2"
                />
                <div className="portfolio-info">
                  <h4>ChatGPT Clone</h4>
                  <p>ChatGPT Clone using Gemini 1.5 Pro</p>
                  <a
                    href="https://raw.githubusercontent.com/samarjitsahoo/chatgpt-clone/main/assets/home.png"
                    title="API 2"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/api"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-api">
              <div className="portfolio-content h-100">
                <img src="/demo.jpg" className="img-fluid" alt="API 3" />
                <div className="portfolio-info">
                  <h4>API 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="/demo.jpg"
                    title="API 3"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/api"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-other">
              <div className="portfolio-content h-100">
                <img src="/demo.jpg" className="img-fluid" alt="Other 1" />
                <div className="portfolio-info">
                  <h4>Others 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="/demo.jpg"
                    title="Other 1"
                    data-gallery="portfolio-gallery-books"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/other"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-other">
              <div className="portfolio-content h-100">
                <img src="/demo.jpg" className="img-fluid" alt="Other 2" />
                <div className="portfolio-info">
                  <h4>Others 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="/demo.jpg"
                    title="Other 2"
                    data-gallery="portfolio-gallery-books"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/other"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-other">
              <div className="portfolio-content h-100">
                <img src="/demo.jpg" className="img-fluid" alt="Other 3" />
                <div className="portfolio-info">
                  <h4>Others 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a
                    href="/demo.jpg"
                    title="Other 3"
                    data-gallery="portfolio-gallery-books"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <Link
                    to="/projects/other"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
