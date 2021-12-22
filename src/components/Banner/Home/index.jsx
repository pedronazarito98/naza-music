import { Divider } from "../../Divider";
import { BackgroundBanner, IconBanner, TextBanner } from "./styles";
export function Banner({ bgImage, title, icon }) {
  return (
    <>
      <BackgroundBanner bgImage={bgImage} loading='lazy'>
        <IconBanner>{icon}</IconBanner>
        <TextBanner>{title}</TextBanner>
        <Divider height="2px" width="10%" colorLine="white" />
      </BackgroundBanner>
    </>
  );
}
