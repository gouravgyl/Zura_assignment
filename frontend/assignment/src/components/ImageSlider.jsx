import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:2345/carousel`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <section style={{}} className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {data.map((slide, index) => {
        return (
          <div
            style={{ height: "300px" }}
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
