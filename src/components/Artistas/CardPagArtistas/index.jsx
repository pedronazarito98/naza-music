import { Link } from "react-router-dom";
import {
  CardArtistas,
  ImageCard,
  NameArtista,
  SecondName,
  WrapperImage,
} from "./styles";

export function CardPagArtistas({
  imageArtista,
  nomeArtista,
  secondName,
  linkUrl,
}) {
  return (
    <CardArtistas>
      <WrapperImage>
        <ImageCard src={imageArtista} alt="Image" loading="lazy" />
      </WrapperImage>
      <Link to={"/artista/" + linkUrl}>
        <NameArtista>{nomeArtista}</NameArtista>
      </Link>
      <SecondName>{secondName}</SecondName>
    </CardArtistas>
  );
}
