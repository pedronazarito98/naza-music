import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #171717;
  /* position: absolute; */
  width: 100%;
  padding: 20px;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ListItems = styled.ul`
  display: flex;
  flex-direction: column;

  color: #fff;

  li {
    position: relative;
    cursor: pointer;
    list-style: none;

    &::after {
      content: "";
      position: absolute;

      height: 2px;
      bottom: 0;
      left: 50%;
      width: 0;

      background: none repeat scroll 0 0 transparent;
      background: var(--red-300);
      display: block;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }
    &:hover::after {
      width: 100%;
      left: 0;
    }
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  h2 {
    color: #fff;
  }
  img {
    width: 80%;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #fff;
  }
`;

export const ListIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 50px;
    margin: 10px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(0.9);
    }
  }
`;

export const InstagramIcon = styled(FaInstagram)`
  background: radial-gradient(
      circle farthest-corner at 35% 90%,
      #fec564,
      transparent 50%
    ),
    radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
    radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 20% -50%,
      #5258cf,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 60% -20%,
      #893dc2,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
    linear-gradient(
      #6559ca,
      #bc318f 30%,
      #e33f5f 50%,
      #f77638 70%,
      #fec66d 100%
    );
  color: #fff;
  border-radius: 20px;
`;
