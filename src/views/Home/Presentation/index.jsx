import { Divider } from "../../../components/Divider";
import { SubTitle, Title } from "../../../components/Text/styles";
import { ContainerText } from "./style";
import { ParallaxLayer } from "@react-spring/parallax";

export function PresentationView() {
  return (
    <ContainerText>
      <Title>
        NAZA <br />
        MÚSICA EM MOVIMENTO
      </Title>
      <Divider width="300px" height="4px" />

      <SubTitle>
        A META DA NAZA MUSIC É MAXIMIZAR O POTENCIAL DE CADA CLIENTE E
        CONTRIBUIR PARA QUE O RETORNO DO TRABALHO SEJA LUCRATIVO!
      </SubTitle>
    </ContainerText>
  );
}
