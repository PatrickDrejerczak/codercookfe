import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./FeaturedCarousel.css";

const FeaturedCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="featuredCarousel"
    >
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://images.immediate.co.uk/production/volatile/sites/2/2015/10/15455.jpg?quality=90&resize=600%2C400"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://www.unileverfoodsolutions.com.vn/dam/global-ufs/mcos/phvn/vietnam/calcmenu/recipes/VN-recipes/red-meats-&-red-meat-dishes/glazed-duck-with-honey/main-header.jpg"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="https://cdn-japantimes.com/wp-content/uploads/2017/12/p14-duck-a-20171217.jpg"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default FeaturedCarousel;
