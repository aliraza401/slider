export interface SliderProps {
  children: React.ReactNode;
  showSlides: 3 | 5;
}

export interface StyledSliderContainerProps {
  showSlides?: number;
  width?: string | number;
  height?: string;
}
