import {
  BannerParallax,
  Container,
  ImageBanner,
  SubtitleBanner,
  TitleBanner,
  WrapperInfo,
} from "./styles";
import imgBg from "../../../assets/GeorgeArrunateghi-Banner.jpg";

export function BannerArtists() {
  return (
    <BannerParallax
      blur={{ min: 1, max: 3 }}
      bgImage={imgBg}
      bgImageAlt="banner"
      // strength={200}
    >
      <Container>
        <WrapperInfo>
          <ImageBanner
            src={imgBg}
            alt="Fonseec"
            roundedCircle
            className="img-circle"
          />
          <TitleBanner> Fonseec </TitleBanner>
          <SubtitleBanner> Rapper </SubtitleBanner>
        </WrapperInfo>
      </Container>
    </BannerParallax>
  );
}
