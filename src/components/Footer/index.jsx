import {
  FooterContainer,
  ListItems,
  WrapperImage,
  WrapperIcons,
  ListIcons,
  InstagramIcon,
} from "./styles";
import logo from "../../assets/Logomarca.png";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <FooterContainer>
        <ListItems>
          <li>Contato</li>
          <li>Sobre</li>
          <li>Serviços</li>
        </ListItems>
        <WrapperImage>
          <h2>Explore a Naza Music</h2>
          <img src={logo} alt="Logo Footer" />
        </WrapperImage>

        <WrapperIcons>
          <h2>Siga-nos</h2>
          <ListIcons>
            <FaFacebook color="#4267B2" />
            <FaTwitter color="#1DA1F2" />
            <InstagramIcon />
          </ListIcons>
        </WrapperIcons>
      </FooterContainer>
    </>
  );
}
