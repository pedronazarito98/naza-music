import styled from "styled-components";

export const BackgroundBanner = styled.section`
  background-image: url(${(props) => props.bgImage && props.bgImage});

  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextBanner = styled.h1`
  font-size: 80px;
  color: #fff;
`;

export const IconBanner = styled.div`
  width: 100px;
  height: 100px;
  background: #D20020;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg{
      font-size: 40px;
      color: #fff;
  }
`;
