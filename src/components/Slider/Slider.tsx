import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SliderContainer, Slide } from "./Slider.styled";
import { SliderProps } from "./Slider.interface";

export const Slider: React.FC<SliderProps> = ({
  children,
  orientation = "horizontal",
  cells = 9,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<NodeListOf<HTMLDivElement>>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [radius, setRadius] = useState(0);

  const cellCount = cells;
  const isHorizontal = orientation === "horizontal";
  const rotateFn = orientation === "horizontal" ? "rotateY" : "rotateX";

  useLayoutEffect(() => {
    if (carouselRef.current) {
      cellsRef.current =
        carouselRef.current.querySelectorAll(".carousel__cell");
      changeCarousel();
    }
  }, [cellCount, isHorizontal, rotateFn]);

  const changeCarousel = () => {
    const theta = 360 / cellCount;
    const cellSize = isHorizontal
      ? carouselRef.current!.offsetWidth
      : carouselRef.current!.offsetHeight;
    const newRadius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
    setRadius(newRadius);

    for (let i = 0; i < cellsRef.current!.length; i++) {
      const cell = cellsRef.current![i];
      if (i < cellCount) {
        cell.style.opacity = "1";
        if (orientation === "vertical") {
          cell.style.paddingTop = "0.5rem";
          cell.style.paddingBottom = "0.5rem";
        } else {
          cell.style.paddingLeft = "0.5rem";
          cell.style.paddingRight = "0.5rem";
        }

        const cellAngle = theta * i;
        cell.style.transform =
          rotateFn + "(" + cellAngle + "deg) translateZ(" + newRadius + "px)";
      } else {
        cell.style.opacity = "0";
        cell.style.transform = "none";
      }
    }
  };

  const rotateCarousel = () => {
    const angle = (360 / cellCount) * selectedIndex * -1;
    carouselRef.current!.style.transform =
      "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
  };

  useEffect(() => rotateCarousel(), [selectedIndex, radius]);

  const handlePrevClick = () => setSelectedIndex(selectedIndex - 1);
  const handleNextClick = () => setSelectedIndex(selectedIndex + 1);

  return (
    <SliderContainer>
      <div className="scene">
        <div className="carousel" ref={carouselRef}>
          {React.Children.map(children, (child) => (
            <Slide className="carousel__cell">{child}</Slide>
          ))}
        </div>
      </div>

      <button className="previous-button" onClick={handlePrevClick}>
        {"<"}
      </button>
      <button className="next-button" onClick={handleNextClick}>
        {">"}
      </button>
    </SliderContainer>
  );
};
