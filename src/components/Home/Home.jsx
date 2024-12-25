import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "./Home.scss";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const typed = new Typed(typedRef.current, {
      strings: ["Software Engineer", "Website Developer", "AI/ML Enthusiast"],
      typeSpeed: 25,
      backSpeed: 25,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div id="home" className="hero section dark-background">
      <img
        src="https://res.cloudinary.com/dry07iyvo/image/upload/v1735121311/home_fxyalj.jpg"
        alt="Background"
        aria-hidden="true"
        data-aos="fade-in"
        className="hero-bg"
      />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Samarjit Sahoo</h2>
        <p>
          I am a <span ref={typedRef} className="typed"></span>
        </p>
      </div>
    </div>
  );
};

export default Home;
