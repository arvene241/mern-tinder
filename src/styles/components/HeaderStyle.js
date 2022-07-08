import styled from "styled-components";
import { flex } from "../GlobalStyle";

export const Navbar = styled.nav`
  ${flex};
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Button = styled.button`
  padding: 12px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.54);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${flex};

  :hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  svg {
    user-select: none;
    width: 1.75rem;
    height: 1.75rem;
  }
`;
