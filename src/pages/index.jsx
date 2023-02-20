import Main from "../components/layouts/main";

import Container from "../components/container";
import Neucontainer from "../components/neucontainer";

import EthereumCard from "../components/Cards/EthereumCard";
import FlipCard from "../components/Cards/FlipCard";
import HoverCard from "../components/Cards/HoverCard";
import NeuCardDark from "../components/Cards/NeuCardDark";
import NeuCardLight from "../components/Cards/NeuCardLight";
import WeatherCard from "../components/Cards/WeatherCard";

// function Header({ title }) {
//   return <h1>{title ? title : "Default title"}</h1>;
// }

function HomePage() {
  return (
    <div className="">
      <Container>
        <EthereumCard />
        <FlipCard />
        <HoverCard />
        <Neucontainer>
          <NeuCardDark className="dark" />
          <NeuCardLight />
        </Neucontainer>
        <WeatherCard />
      </Container>
    </div>
  );
}

export default HomePage;
