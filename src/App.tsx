import { Slider } from "./components/Slider";
import { StyledImage } from "./components/Slider/Slider.styled";
import styled from "styled-components";

const imagesArray = [
  "https://images6.alphacoders.com/451/451608.jpg",
  "https://images8.alphacoders.com/505/505616.png",
  "https://images3.alphacoders.com/848/848449.png",
  "https://images4.alphacoders.com/560/560170.jpg",
  "https://c4.wallpaperflare.com/wallpaper/997/210/533/anime-attack-on-titan-attack-on-titan-levi-ackerman-wallpaper-preview.jpg",
  "https://images3.alphacoders.com/848/848449.png",
  "https://c4.wallpaperflare.com/wallpaper/444/553/202/digital-art-artwork-anime-anime-boys-wallpaper-preview.jpg",
];

function App() {
  return (
    <div style={{ marginTop: 100 }}>
      <Slider showSlides={5} width="400px" height="400px">
        {imagesArray.map((item: string, index) => (
          <StyledImage src={item} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default App;
