import React, { useState } from "react";
import { SliderProps } from "./Slider.interface";
import {
  SliderContainer,
  Slide,
  PrevButton,
  NextButton,
} from "./Slider.styled";

import { useWindowWidth } from "./../../hooks/useWindowWidth";
import { useThrottle } from "../../hooks/useThrottle";

export const Slider = ({ children, showSlides }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenLength = React.Children.count(children);
  const { windowWidth } = useWindowWidth();

  const getSlideClass = (index: number) => {
    const relativeIndex =
      (index - currentIndex + childrenLength) % childrenLength;

    if (showSlides === 3) {
      switch (relativeIndex) {
        case 0:
          return "center";
        case 1:
          return "right-curved";
        case childrenLength - 1:
          return "left-curved";
        default:
          return "hidden";
      }
    } else {
      switch (relativeIndex) {
        case 0:
          return "center";
        case 1:
          return "right";
        case childrenLength - 1:
          return "left";
        case 2:
          return "right-far";
        case childrenLength - 2:
          return "left-far";
        default:
          return "hidden";
      }
    }
  };

  const prevSlide = () =>
    setCurrentIndex((currentIndex - 1 + childrenLength) % childrenLength);

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % childrenLength);

  const throttlePrevSlide = useThrottle(prevSlide, 1000);
  const throttleNextSlide = useThrottle(nextSlide, 1000);

  return (
    <SliderContainer showSlides={showSlides}>
      {React.Children.map(children, (child, index) => (
        <Slide showSlides={showSlides} width={windowWidth} key={index} className={getSlideClass(index)}>
          {child}
        </Slide>
      ))}
      <PrevButton onClick={throttlePrevSlide}>&lt;</PrevButton>
      <NextButton onClick={throttleNextSlide}>&gt;</NextButton>
    </SliderContainer>
  );
};
