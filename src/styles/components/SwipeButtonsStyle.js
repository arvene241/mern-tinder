import styled from "styled-components";
import { flex } from "../GlobalStyle";

export const SwiperContainer = styled.div`
  position: fixed;
  bottom: 7vh;
  width: 100%;
`;

export const Buttons = styled.div`
  width: 100%;
  ${flex};
  justify-content: space-evenly;
  padding: 0 50px;

  button {
    background-color: #fff;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.3);
    padding: 20px;

    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
  }
`;
