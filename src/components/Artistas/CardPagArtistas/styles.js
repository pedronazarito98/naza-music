import styled from "styled-components";

export const CardArtistas = styled.div`
  width: 100%;
  max-width: 290px;
  height: 200px;
  padding: 60px 0px 22px 0px;

  margin: 35px ;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  border-radius: 10px;
  background: #efedeb;
  box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
`;

export const WrapperImage = styled.div`
  position: absolute;
  top: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    position: absolute;

    font-size: 33px;
    bottom: -12px;
    left: 21px;

    cursor: pointer;
    border: none !important;
    border-radius: 50%;
    color: white;
    background-color: var(--red-300);

    filter: drop-shadow(1px 2px 8px hsl(220deg 60% 50% / 0.3));

    transition: all 0.2s;
    &:hover {
      color: var(--red-300);
      background-color: white;
    }
  }
`;

export const ImageCard = styled.img`
  filter: drop-shadow(1px 2px 8px hsl(220deg 60% 50% / 0.3));
  width: 80%;
  height: 120px;
  border-radius: 10px;

  position: relative;
`;

export const NameArtista = styled.h1`
  font-size: 1.2rem;
  color: black;
  transition: all 0.2s;

  cursor: pointer;
  &:hover {
    color: var(--red-300);
  }
`;

export const SecondName = styled.h3`
  font-size: 0.9rem;
  color: gray;
  transition: all 0.2s;

  cursor: pointer;
  &:hover {
    color: white;
  }
`;
