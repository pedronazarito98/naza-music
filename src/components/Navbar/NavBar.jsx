import { Burger } from "./Burger/Burger";
import { Logo, Nav } from "./StyleNav";
import logo from '../../assets/Logomarca.png'
export function Navbar() {
  return (
    <Nav>
      <Logo to='/'>
        <img src={logo} alt='Logo' loading='lazy' />
      </Logo>
      <Burger />
    </Nav>
  );
}
