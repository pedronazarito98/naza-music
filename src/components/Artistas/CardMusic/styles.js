import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  max-width: 300px;
  height: 215px;
  background-color: #fff;
  margin: 30px 10px;
  padding: 20px 15px;

  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  border-radius: 15px;

  &:hover {
    height: 350px;
  }
`;

export const Image = styled.div`
  position: relative;
  width: 260px;
  height: 260px;

  top: -40%;
  left: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;

  img {
    max-width: 100%;
    border-radius: 15px;
  }
`;

export const Content = styled.div`
  position: relative;
  top: -140px;
  padding: 10px 15px;
  color: #111;
  text-align: center;

  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;

  ${Card}:hover & {
    margin-top: 30px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
  }
`;
