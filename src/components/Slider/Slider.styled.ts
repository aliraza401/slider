import styled from "styled-components";

export const SlyledSlider = styled.div`
  .carousel-box {
    /* margin-top: calc(50%); */
    margin: 0 auto;
    width: 400px;
    height: 450px;
    position: relative;
    perspective: 1000px;

    @media screen and (max-width: 1024px) {
      width: 250px;
      height: 350;
    }

    @media screen and (max-width: 600px) {
      width: 160px;
      height: 250;
    }
  }

  .carousel {
    height: 100%;
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 0.2s;
  }

  .item {
    display: block;
    position: absolute;
    width: 390px;
    height: 350px;
    display: none;

    @media screen and (max-width: 1024px) {
      width: 240px;
      height: 450px;
    }

    @media screen and (max-width: 600px) {
      width: 150px;
      height: 250px;
    }
  }

  .item.active-view {
    display: block;
  }

  .action-buttons {
    position: fixed;
    top: 10px;
    left: 10px;
  }

  .next,
  .prev {
    padding: 10px;
    cursor: pointer;
    background: lightgray;
    border-radius: 5px;
  }
  .next {
    right: 5em;
  }
  .prev {
    left: 5em;
  }
`;

export const StyledSlide = styled.div<{ index: number }>`
  transform: ${({ index }) => `rotateY(${index * 60}deg) translateZ(360px) translateY(50px)`};

  @media screen and (max-width: 1024px) {
    transform: ${({ index }) => `rotateY(${index * 60}deg) translateZ(240px)`};
  }

  @media screen and (max-width: 600px) {
    transform: ${({ index }) => `rotateY(${index * 60}deg) translateZ(150px)`};
  }
`;
