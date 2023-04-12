import styled from "styled-components";
import { StyledSliderContainerProps } from "./Slider.interface";

export const SliderContainer = styled.div<StyledSliderContainerProps>`
  width: 100%;
  height: ${({ height }) => height};
  position: relative;
  overflow: hidden;
`;

export const Slide = styled.div<StyledSliderContainerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: 600px;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.8s ease;
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

  &.left-curved {
    transform: translate(-123%, -50%) scale(0.5) perspective(500px)
      rotateY(-65deg);
    z-index: 2;
  }

  &.right-curved {
    transform: translate(23%, -50%) scale(0.5) perspective(500px) rotateY(65deg);
    z-index: 2;
  }

  &.left-far {
    transform: translate(-223%, -50%) scale(0.6) perspective(500px)
      rotateY(-68deg);
    z-index: 1;
  }

  &.right-far {
    transform: translate(120%, -50%) scale(0.6) perspective(500px)
      rotateY(72deg);
    z-index: 1;
  }

  &.hidden {
    visibility: hidden;
    transform: translate(-50%, -50%) scale(0) perspective(500px) rotateY(90deg);
    transition: 0s;
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
  font-size: 24px;
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
  font-size: 24px;
  cursor: pointer;
  z-index: 9;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
