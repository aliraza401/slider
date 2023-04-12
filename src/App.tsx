import { Slider } from "./components/Slider";
import { StyledImage } from "./components/Slider/Slider.styled";
import { imagesArray } from "./constraints/images";

function App() {
  return (
    <div style={{ marginTop: 100 }}>
      <Slider>
        {imagesArray.map((item: string, index) => (
          <StyledImage src={item} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default App;
