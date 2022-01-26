import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 90px;
  /* border-bottom: 2px solid var(--red-200);
  background: var(--red-200); */
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const Logo = styled(Link)`
  padding: 15px 0;
`;
