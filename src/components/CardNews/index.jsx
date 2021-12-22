import {
  ButtonCard,
  ContentCard,
  ImageCard,
  TitleCard,
  WrapperCard,
  WrapperContent,
} from "./styles";
import imgHans from "../../assets/hans-card.jpg";
export function CardNews() {
  return (
    <>
      <WrapperCard>
        <ImageCard src={imgHans} alt="Img Hans" />

        <WrapperContent>
          <TitleCard>Di Saquê</TitleCard>
          <ContentCard>
            Hans Landim está com música nova nas plataformas digitais

          </ContentCard>
          <ButtonCard>Confira</ButtonCard>
        </WrapperContent>
      </WrapperCard>
    </>
  );
}
