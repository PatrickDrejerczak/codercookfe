import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./FeaturedCarousel.css";
import { Link } from "react-router-dom";

const FeaturedCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <br />
      <h1 className="carouselTitle">Recipe Recommendations</h1>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="featuredCarousel"
        controls={false}
      >
        <Carousel.Item>
          <Link as={Link} to="/recipe/6167b7d0d9d31bbb2abcb8a5">
            <img
              className="d-block w-100 carouselImage"
              src="https://images.immediate.co.uk/production/volatile/sites/2/2015/10/15455.jpg?quality=90&resize=600%2C400"
              alt="First slide"
            />
          </Link>
          <Carousel.Caption className="carouselCaption">
            Duck with Potatoe and Red Berry Sauce
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link as={Link} to="/recipe/6167b81fd9d31bbb2abcb917">
            <img
              className="d-block w-100 carouselImage"
              src="https://www.unileverfoodsolutions.com.vn/dam/global-ufs/mcos/phvn/vietnam/calcmenu/recipes/VN-recipes/red-meats-&-red-meat-dishes/glazed-duck-with-honey/main-header.jpg"
              alt="Second slide"
            />
          </Link>
          <Carousel.Caption className="carouselCaption">
            Duck with Lentilmousse
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link as={Link} to="/recipe/6167b865d9d31bbb2abcb97e">
            <img
              className="d-block w-100 carouselImage"
              src="https://cdn-japantimes.com/wp-content/uploads/2017/12/p14-duck-a-20171217.jpg"
              alt="Third slide"
            />
          </Link>
          <Carousel.Caption className="carouselCaption">
            Duck Fillet with Mustard
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
