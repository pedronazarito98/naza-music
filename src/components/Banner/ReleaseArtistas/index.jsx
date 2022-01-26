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
            loading="lazy"
            src={imgBg}
            alt="Fonseec"
            className="img-circle"
          />
          <TitleBanner> George Arrunáteghi</TitleBanner>
          <SubtitleBanner> Cantor </SubtitleBanner>
        </WrapperInfo>
      </Container>
    </BannerParallax>
  );
}
