import styled from "styled-components";
import { StyledSliderContainerProps } from "./Slider.interface";

export const SliderContainer = styled.div<StyledSliderContainerProps>`
  .scene {
    margin: 40px 0;
    position: relative;
    width: 40vw;
    height: 35vw;
    margin: 80px auto;
    perspective: 1000px;
  }

  .carousel {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateZ(-288px);
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  .previous-button {
    position: fixed;
    cursor: pointer;
    font-size: 20px;
    top: 10px;
    left: 10px;
  }

  .next-button {
    position: fixed;
    cursor: pointer;
    font-size: 20px;
    top: 10px;
    left: 35px;
  }
`;

export const Slide = styled.div`
  position: absolute;
  width: 40vw;
  height: 35vw;
  max-width: 40vw;
  max-height: 35vw;
  left: 10px;
  top: 10px;
  line-height: 116px;
  font-size: 80px;
  font-weight: bold;
  color: white;
  text-align: center;
  transition: transform 1s, opacity 1s;
  background: white;
  box-sizing: border-box;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
