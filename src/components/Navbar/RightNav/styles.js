import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Link = styled(ReactLink)`
  padding: 5px 15px;
  transition: all 0.2s ease-in-out;
  color: black;
  font-size: 1.3rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;

    height: 2px;
    bottom: 0;
    width: 0;
    align-items: center;

    background: none repeat scroll 0 0 transparent;
    background: var(--red-300);
    display: block;
    transition: width 0.3s ease 0s, right 0.3s ease 0s;
  }
  &:hover::after {
    width: 90%;

  }
`;

export const NavLink = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    z-index: 2;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    ${Link} {
      color: #fff;
    }
  }
`;
