import styled from "styled-components";

export const WrapperCard = styled.div`
  border-radius: 16px 16px 5px 5px;
  width: 100%;
  max-width: 200px;

  margin: 10px;
  background-color: hsla(0, 0%, 83.9%, 0.712);
`;

export const ImageCard = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const WrapperContent = styled.div`
  padding: 10px;
`;

export const TitleCard = styled.h1`
  font-size: 22px;
`;

export const ContentCard = styled.p`
  font-size: 18px;
  //! Reticencias apartir de 3 linhas
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; //? Define quantas linhas
  -webkit-box-orient: vertical;
`;

export const ButtonCard = styled.button`
  width: 100%;
  background-color: var(--red-300);
  padding: 10px;
  border-radius: 3px;
  color: #fff;
  margin-top: 10px;
  box-shadow: 0px 0px 4px #0000007a;

  transition: transform 0.2s;
  &:hover {
    transform: scale(0.95);
  }
`;
