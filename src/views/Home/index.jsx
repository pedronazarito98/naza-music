import { NewsView } from "./News";
import { PresentationView } from "./Presentation";
import { ServicosView } from "./Servicos";
import { ParallaxLayer } from "@react-spring/parallax";

export function ViewHome() {
  return (
    <>
      <PresentationView />
      <NewsView />
      <ServicosView />
    </>
  );
}
