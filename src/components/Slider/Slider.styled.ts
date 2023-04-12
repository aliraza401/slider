import styled from "styled-components";
import { StyledSliderContainerProps } from "./Slider.interface";
import { getScaleValue } from "../../utils";

export const SliderContainer = styled.div<StyledSliderContainerProps>`
  width: 100%;
  height: ${({ showSlides }) => (showSlides === 3 ? "65vh" : "45vh")};
  position: relative;
  overflow: hidden;
`;

export const Slide = styled.div<StyledSliderContainerProps>`
  width: ${({ showSlides }) => (showSlides === 3 ? "60vw" : "20vw")};
  height: ${({ showSlides }) => (showSlides === 3 ? "65vh" : "45vh")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.5s ease;
  z-index: 0;

  &.center {
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  &.left {
    transform: translate(-153%, -50%);
    z-index: 2;
  }

  &.right {
    transform: translate(53%, -50%);
    z-index: 2;
  }

  ${({ width }) => {
    const widthCalculated = width || window.innerWidth;
    const scaleValue = getScaleValue(+widthCalculated);

    console.log({ width, scaleValue });
    return `
      &.left-curved {
        transform: translate(-138%, -50%) scale(${scaleValue}) perspective(500px) rotateY(-45deg);
        z-index: 2;
        opacity: 0.8;
      }

      &.right-curved {
        transform: translate(38%, -50%) scale(${scaleValue}) perspective(500px) rotateY(45deg);
        z-index: 2;
        opacity: 0.8;
      }
    `;
  }}

  &.left-far {
    transform: translate(-247%, -50%) scale(0.82) perspective(500px)
      rotateY(-34deg);
    z-index: 1;
  }

  &.right-far {
    transform: translate(147%, -50%) scale(0.82) perspective(500px)
      rotateY(34deg);
    z-index: 1;
  }

  &.hidden {
    visibility: hidden;
    transition: 0.3s;
  }

  @media screen and (max-width: 1024px) {
    width: 50vw;
    height: 45vh;

    &.center {
      transform: translate(-50%, -50%);
    }

    &.left {
      transform: translate(-123%, -50%) scale(0.5) perspective(500px)
        rotateY(-65deg);
    }

    &.right {
      transform: translate(23%, -50%) scale(0.5) perspective(500px)
        rotateY(65deg);
    }

    &.left-far,
    &.right-far {
      visibility: hidden;
    }
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 45px;
  cursor: pointer;
  z-index: 9;
`;

export const NextButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 45px;
  cursor: pointer;
  z-index: 9;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
