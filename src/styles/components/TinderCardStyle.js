import styled from "styled-components";
import { Container, flex } from "../GlobalStyle";

export const TinderContainer = styled(Container)`
    height: 75vh;
`

export const Card = styled.div`
    width: 600px;
    height: 80%;
    max-width: 85vw;
    position: relative;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3);
    ${flex};

    .swipe {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`
export const TinderProfile = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
`
export const TinderName = styled.div`
    position: absolute;
    left: 30px;
    bottom: 30px;
    color: #FFF;
`