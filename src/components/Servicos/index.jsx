import {
  IconWrapper,
  ImageInfoCard,
  TitleCard,
  WrapperCard,
  WrapperContent,
  WrapperInfoCard,
} from "./styles";

export function CardServicos({ icon, titleCard, link }) {
  return (
    <WrapperCard>
      <IconWrapper>{icon}</IconWrapper>
      <TitleCard href={link}>{titleCard}</TitleCard>
    </WrapperCard>
  );
}

export function InfoCard({ imageInfo, titleInfo, contentInfo, direction }) {
  return (
    <WrapperInfoCard direction={direction}>
      <ImageInfoCard src={imageInfo} alt="image" loading='lazy'/>
      <WrapperContent>
        <h1> {titleInfo}</h1>
        <p>{contentInfo}</p>
      </WrapperContent>
    </WrapperInfoCard>
  );
}

