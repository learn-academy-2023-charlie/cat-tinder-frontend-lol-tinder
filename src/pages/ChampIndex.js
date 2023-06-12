import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import another from "../assets/another.png";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "../styles/ChampIndex.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";

const carouselStyle = {
  backgroundImage: `url(${another})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "90vh",
  marginTop: "5vh",
};

const ChampIndex = ({ championsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === championsData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? championsData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = championsData.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
        active={item.id === activeIndex}
      >
        <img className="carousel-image" src={item.image} alt={item.altText} />
        <CarouselCaption
          captionHeader={<div className="custom-header">{item.name}</div>}
          captionText={<div className="custom-text">{`${item.age}`}</div>}
        />
        <NavLink className="navBtn" to={`/champShow/${item.id}`}>
          <Button>More info</Button>
        </NavLink>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        style={carouselStyle}
      >
        <CarouselIndicators
          items={championsData}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <Link to="/champNew">
        <Button className="navBtn2">Add a Character</Button>
      </Link>
      <NavLink className="navBtn3" to="/champIndex">
        <Button>View Carousel</Button>
      </NavLink>
    </div>
  );
};

ChampIndex.propTypes = {
  championsData: PropTypes.array.isRequired,
};

export default ChampIndex;
