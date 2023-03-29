import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Showslide = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="banner">
      <Link to="/men">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.imgSrc}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </Link>
    </div>
  );
};

export default Showslide;
