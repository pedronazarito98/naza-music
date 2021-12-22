import { Parallax } from "react-parallax";
import styled from "styled-components";

export const BannerParallax = styled(Parallax)`
  /* height: 500px; */
`;

export const Container = styled.div`
  height: 500px;
`;

export const WrapperInfo = styled.div`
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ImageBanner = styled.img`
  border-radius: 50%;
  width: 170px;
  height: 156px;
`;

export const TitleBanner = styled.h1`
  color: white;
  margin-top: 20px;
`;

export const SubtitleBanner = styled(TitleBanner)`
  font-size: 20px;
`;