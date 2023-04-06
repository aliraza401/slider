import React, { useRef, useState } from "react";
import { SliderProps } from "./Slider.interface";
import { SlyledSlider, StyledSlide } from "./Slider.styled";

export const Slider: React.FC<SliderProps> = ({ children }) => {
  const carouselRef = useRef<any>(null);
  const [currDeg, setCurrentDeg] = useState(0);
  const [currIndex, setCurrentIndex] = useState(0);
  const childrensLength = children.length - 1;

  const getIndevViewPortClass = React.useCallback(
    (currIndex: number, index: number): string => {
      if (index === currIndex) return "active-view";
      if (index === currIndex - 1 || index === currIndex + 1)
        return "active-view";
      if (currIndex === childrensLength && index === 0) return "active-view";
      if (currIndex === 0 && index === childrensLength) return "active-view";
      return "";
    },
    [currIndex]
  );

  const rotate = (event: any) => {
    let nextDeg = currDeg;
    if (event == "n") {
      nextDeg -= 60;
      setCurrentIndex(currIndex === childrensLength ? 0 : currIndex + 1);
    } else if (event == "p") {
      nextDeg += 60;
      setCurrentIndex(currIndex === 0 ? childrensLength : currIndex - 1);
    } else {
      return;
    }

    setCurrentDeg(nextDeg);

    carouselRef.current.style.webkitTransform = `rotateY(${nextDeg}deg)`;
    carouselRef.current.style.MozTransform = `rotateY(${nextDeg}deg)`;
    carouselRef.current.style.oTransform = `rotateY(${nextDeg}deg)`;
    carouselRef.current.style.transform = `rotateY(${nextDeg}deg)`;
  };

  return (
    <SlyledSlider>
      <div className="carousel-box">
        <div className="carousel" ref={carouselRef}>
          {React.Children.map(children, (child, index) => (
            <StyledSlide
              index={index}
              key={index}
              className={`item ${getIndevViewPortClass(currIndex, index)}`}
            >
              {child}
            </StyledSlide>
          ))}
        </div>
      </div>
      <div className="action-buttons">
        <button className="prev" onClick={() => rotate("p")}>
          {"<"}
        </button>
        <button className="next" onClick={() => rotate("n")}>
          {">"}
        </button>
      </div>
    </SlyledSlider>
  );
};
