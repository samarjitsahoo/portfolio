import React, { useEffect, useRef, useCallback } from "react";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";

const CertificationItem = ({
  imageSrc,
  title,
  description,
  lightboxLink,
  detailsLink,
}) => (
  <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
    <div className="portfolio-content h-100">
      <img src={imageSrc} className="img-fluid" alt={title} />
      <div className="portfolio-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <a
          href={lightboxLink}
          title={title}
          className="certifications-lightbox preview-link"
          data-glightbox="type: external"
        >
          <i className="bi bi-zoom-in"></i>
        </a>
        <a
          href={detailsLink}
          className="details-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-link-45deg"></i>
        </a>
      </div>
    </div>
  </div>
);

function Certifications() {
  const lightboxRef = useRef(null);
  const isotopeRef = useRef(null);
  const initializeIsotope = useCallback(() => {
    isotopeRef.current = new Isotope(".isotope-container", {
      itemSelector: ".isotope-item",
      layoutMode: "masonry",
      sortBy: "original-order",
    });
  }, []);
  const initializeLightbox = useCallback(() => {
    lightboxRef.current = GLightbox({
      selector: ".certifications-lightbox",
    });
  }, []);
  const handleFilterClick = useCallback((e) => {
    const filterValue = e.target.getAttribute("data-filter");
    isotopeRef.current.arrange({ filter: filterValue });
    document
      .querySelectorAll(".portfolio-filters li")
      .forEach((item) => item.classList.remove("filter-active"));
    e.target.classList.add("filter-active");
  }, []);

  useEffect(() => {
    initializeIsotope();
    initializeLightbox();
    const filters = document.querySelectorAll(".portfolio-filters li");
    filters.forEach((filter) =>
      filter.addEventListener("click", handleFilterClick)
    );
    return () => {
      filters.forEach((filter) =>
        filter.removeEventListener("click", handleFilterClick)
      );
      lightboxRef.current?.destroy();
      isotopeRef.current?.destroy();
    };
  }, [initializeIsotope, initializeLightbox, handleFilterClick]);

  return (
    <section id="certifications" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Certifications</h2>
        <p className="justify">
          Explore a curated selection of certifications showcasing my technical
          expertise and problem-solving skills. Each certification represents my
          commitment to mastering new technologies and delivering practical,
          innovative solutions.
        </p>
      </div>
      <div className="container">
        <div
          className="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <CertificationItem
            imageSrc="https://media.licdn.com/dms/image/v2/D561FAQHpYKJPN0IudA/feedshare-document-images_800/feedshare-document-images_800/1/1697363801497?e=1731542400&v=beta&t=n7EUhv0uPSw2EYklCNdgwrKQef6mphpkYM2R9tsFynI"
            title="Crash Course on Python"
            description="Authorized by Google"
            lightboxLink="https://media.licdn.com/dms/image/v2/D561FAQHpYKJPN0IudA/feedshare-document-images_800/feedshare-document-images_800/1/1697363801497?e=1731542400&v=beta&t=n7EUhv0uPSw2EYklCNdgwrKQef6mphpkYM2R9tsFynI"
            detailsLink="https://www.coursera.org/account/accomplishments/verify/PJE8PLWF3STL"
            ariaLabel="View details for Crash Course on Python certification"
          />
          <CertificationItem
            imageSrc="https://media.licdn.com/dms/image/v2/D4D1FAQE3K-uTXqmjDw/feedshare-document-images_800/feedshare-document-images_800/1/1714481610248?e=1731542400&v=beta&t=jRDy80NUN97ahTXXpwzHM5OFMM68RHuBmOTVzLjyyhQ"
            title="Machine Learning with Python"
            description="Authorized by IBM"
            lightboxLink="https://media.licdn.com/dms/image/v2/D4D1FAQE3K-uTXqmjDw/feedshare-document-images_800/feedshare-document-images_800/1/1714481610248?e=1731542400&v=beta&t=jRDy80NUN97ahTXXpwzHM5OFMM68RHuBmOTVzLjyyhQ"
            detailsLink="https://www.coursera.org/account/accomplishments/verify/7DGGQEBMTJXC"
            ariaLabel="View details for Machine Learning with Python certification"
          />
          <CertificationItem
            imageSrc="https://media.licdn.com/dms/image/v2/D561FAQEBPuRfY71_LA/feedshare-document-images_800/feedshare-document-images_800/1/1706174363953?e=1731542400&v=beta&t=HhRgd21rh_YnSdPjNiP5uwbwaLG19bulU8BAeaFkHUI"
            title="The Full Stack"
            description="Authorized by Meta"
            lightboxLink="https://media.licdn.com/dms/image/v2/D561FAQEBPuRfY71_LA/feedshare-document-images_800/feedshare-document-images_800/1/1706174363953?e=1731542400&v=beta&t=HhRgd21rh_YnSdPjNiP5uwbwaLG19bulU8BAeaFkHUI"
            detailsLink="https://www.coursera.org/account/accomplishments/verify/QRS8YH2ARCSN"
            ariaLabel="View details for Full Stack certification"
          />
        </div>
      </div>
    </section>
  );
}

export default Certifications;