import { Carrousel } from "../../components/Slider";
import { ViewHome } from "../../views/Home/index";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { PresentationView } from "../../views/Home/Presentation";
import { NewsView } from "../../views/Home/News";
import { ServicosView } from "../../views/Home/Servicos";
export function Home() {
  return (
    <>
      <Carrousel />
      <PresentationView />
      <NewsView />
      <ServicosView />

      {/* <ParallaxLayer
        offset={0}
        factor={1}
        style={{ backgroundColor: "green" }}
      ></ParallaxLayer>

      <ParallaxLayer offset={1} speed={2.1} factor={1}></ParallaxLayer>

      <ParallaxLayer
        offset={1.9}
        speed={2.1}
        factor={1}
        style={{ backgroundColor: "blue" }}
      ></ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={2.1}
        factor={1}
        style={{ backgroundColor: "pink" }}
      ></ParallaxLayer> */}

      {/* <ViewHome /> */}
    </>
  );
}
