import React, { useEffect, useState } from "react";
import {
  SliderContainer,
  Slide,
  PrevButton,
  NextButton,
} from "./Slider.styled";

interface SliderProps {
  children: React.ReactNode;
  showSlides: 3 | 5;
  width: string;
  height: string;
}

export const Slider = ({
  children,
  showSlides,
  width,
  height,
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenLength = React.Children.count(children);

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

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + childrenLength) % childrenLength);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % childrenLength);
  };

  return (
    <SliderContainer height={height}>
      {React.Children.map(children, (child, index) => (
        <Slide
          key={index}
          width={width}
          height={height}
          className={getSlideClass(index)}
        >
          {child}
        </Slide>
      ))}
      <PrevButton onClick={prevSlide}>&lt;</PrevButton>
      <NextButton onClick={nextSlide}>&gt;</NextButton>
    </SliderContainer>
  );
};
