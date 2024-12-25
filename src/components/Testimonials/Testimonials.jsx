import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.scss";

SwiperCore.use([Autoplay, Pagination]);

const testimonialsData = [
  {
    quote:
      "Samarjit\u2019s expertise and problem-solving skills were instrumental in our project\u2019s success. His dedication and ability to quickly adapt to new challenges made working with him a seamless experience. Highly recommended for anyone seeking a committed and skilled developer.",
    image: "https://avatars.githubusercontent.com/u/129244274?v=4",
    name: "Soumya Khuntia",
    position: "Python Developer",
    country: "India",
  },
  {
    quote:
      "Samarjit consistently delivered high-quality work and demonstrated exceptional technical skills throughout our collaboration. His proactive approach and attention to detail greatly contributed to the project\u2019s success. A true professional who is a pleasure to work with.",
    image: "https://avatars.githubusercontent.com/u/144861807?v=4",
    name: "Jagannath Ojha",
    position: "Web Developer",
    country: "India",
  },
  {
    quote:
      "Samarjit\u2019s dedication and technical proficiency were evident from the start. His clear communication and ability to deliver high-quality work under tight deadlines were outstanding. He\u2019s a reliable and skilled developer who truly excels in his field.",
    image: "https://avatars.githubusercontent.com/u/111912787?v=4",
    name: "Soumya Satapathy",
    position: "UI/UX Designer",
    country: "India",
  },
  {
    quote:
      "Samarjit\u2019s commitment and technical knowledge were crucial in achieving our project goals. His innovative solutions and willingness to go the extra mile made a noticeable impact. I highly value his work ethic and problem-solving abilities.",
    image: "https://avatars.githubusercontent.com/u/147426315?v=4",
    name: "Mohammed Shizan",
    position: "Web Developer",
    country: "India",
  },
  {
    quote:
      "Samarjit\u2019s creativity and technical expertise significantly enhanced our project. His ability to tackle complex problems and deliver results on time was impressive. Working with him was a fantastic experience, and his contributions were invaluable.",
    image: "https://avatars.githubusercontent.com/u/179226225?v=4",
    name: "Shaik Ahesanuddin",
    position: "C++ Developer",
    country: "India",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p className="justify">
          Hear what others have to say about their experience working with me,
          and discover how my skills and dedication have made a difference.
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
          }}
          className="init-swiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p className="justify">
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img
                  src={testimonial.image}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.position}</h4>
                <h4>{testimonial.country}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
