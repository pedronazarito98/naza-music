import { CardNews } from "../../../components/CardNews";
import { Divider } from "../../../components/Divider";
import { Title } from "../../../components/Text/styles";
import { ContainerNews } from "./style";

export function NewsView() {
  return (
    <>
      <ContainerNews>
        <Title>News</Title>
        <Divider width="50px" height="4px" />
        <div style={{ display: "flex" }}>
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
      </ContainerNews>
    </>
  );
}
