import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Slides.module.css"
const Slides = () => {
  return (
    <div className={styles.container}>
      <Carousel
        autoPlay={true}
        dynamicHeight={true}
        infiniteLoop={true}
        stopOnHover={false}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        showArrows={true}
      >
        <div>
          <img
            src="/img/carousel/carousel-1.jpg"
            height="400"
            className="center"
            alt="carousel"
          />
        </div>
        <div>
          <img
            src="/img/carousel/carousel-2.jpg"
            height="400"
            className="center"
            alt="carousel"
          />
        </div>
        <div>
          <img
            src="/img/carousel/carousel-3.jpg"
            height="400"
            className="center"
            alt="carousel"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slides;
