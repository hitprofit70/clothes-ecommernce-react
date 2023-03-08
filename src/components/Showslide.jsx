import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


const Showslide = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <div>
        <Link to='/men'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//img.ltwebstatic.com/images3_ach/2023/02/14/1676355682f7c7cf31758a326ba59d26a115bb8057_thumbnail_1920x.webp"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
        </Link>
    </div>
  )
}

export default Showslide