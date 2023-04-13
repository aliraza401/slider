import { Slider } from "./components/Slider";
import { StyledImage } from "./components/Slider/Slider.styled";
import { imagesArray } from "./constraints/images";

function App() {
  return (
    <>
      <Slider cells={15} orientation="horizontal">
        {imagesArray.map((item: string, index) => (
            <StyledImage src={item} key={index} />
        ))}
      </Slider>
    </>
  );
}

export default App;
