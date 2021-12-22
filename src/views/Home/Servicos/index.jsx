import { Title } from "../../../components/Text/styles";
import { ContainerServicos, WrapperCards } from "./styles";
import { CardServicos } from "../../../components/Servicos/index";
import { FaMicrophoneAlt } from "react-icons/fa";
import { Divider } from "../../../components/Divider";
import { ParallaxLayer } from "@react-spring/parallax";

export function ServicosView() {
  return (
    <>
        <ContainerServicos>
          <Title>Nossos Servicos</Title>
          <Divider width="155px" height="4px" />

          <WrapperCards>
            <CardServicos
              icon={<FaMicrophoneAlt />}
              titleCard="Produção Fonográfica"
            />
            <CardServicos
              icon={<FaMicrophoneAlt />}
              titleCard="Edição Musical"
            />
            <CardServicos icon={<FaMicrophoneAlt />} titleCard="Marketing" />
            <CardServicos
              icon={<FaMicrophoneAlt />}
              titleCard="Licenciamento"
            />
            <CardServicos icon={<FaMicrophoneAlt />} titleCard="Shows" />
          </WrapperCards>
        </ContainerServicos>
    </>
  );
}
