import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/ChampIndex.css';
import another from '../assets/another.png';
import champions from '../championsData';

const carouselStyle = {
  backgroundImage: `url(${another})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '90vh',
  marginTop: '5vh',
};

const ChampIndex = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === champions.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? champions.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = champions.map((item) => {
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
      <Carousel activeIndex={activeIndex} next={next} previous={previous} style={carouselStyle}>
        <CarouselIndicators items={champions} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <NavLink className="navBtn2" to="/champNew">
        <Button>Add a Character</Button>
      </NavLink>
      <NavLink className="navBtn3" to="/champIndex">
        <Button>View Carousel</Button>
      </NavLink>
    </div>
  );
};

ChampIndex.propTypes = {
  champions: PropTypes.array.isRequired,
};

export default ChampIndex;
