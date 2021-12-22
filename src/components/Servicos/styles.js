import styled from "styled-components";

export const WrapperCard = styled.section`
  border-radius: 10px;
  margin: 25px;
  width: 100%;
  height: 250px;
  max-width: 200px;
  background-color: hsla(0, 0%, 83.9%, 0.712);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-20px);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;
  background-color: var(--red-300);

  border-radius: 50%;

  svg {
    font-size: 50px;
    color: #fff;
  }
`;

export const TitleCard = styled.a`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  transition: color 0.4s;

  &:hover {
    color: var(--red-300);
  }
`;

export const WrapperInfoCard = styled.section`
  width: 100%;
  max-width: 950px;
  padding: 10px;
  margin: 20px;

  border-radius: 10px;
  background: white;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction && props.direction};
  flex-wrap: ${(props) => (props.direction === "row" ? 'wrap' : 'wrap')};

  @media screen and (max-width: 768px) {
    width: 425px;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageInfoCard = styled.img`
  width: 100%;
  max-width: 400px;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  width: 100%;
  max-width: 400px;

  h1 {
    text-align: left;
    font-size: 2rem;
    color: var(--red-300);
  }
  p {
    font-size: 0.9rem;
  }
`;
