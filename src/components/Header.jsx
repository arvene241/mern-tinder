import React from "react";
import { BiUser } from "react-icons/bi";
import { SiTinder } from "react-icons/si";
import { TiMessages } from "react-icons/ti";
import { Button, Navbar } from "../styles/components/HeaderStyle";
import { Container } from "../styles/GlobalStyle";

function Header() {
  return (
    <Container>
      <Navbar>
        <Button>
          <BiUser />
        </Button>
        <Button>
          <SiTinder color="rgb(253, 58, 115)" />
        </Button>
        <Button>
          <TiMessages />
        </Button>
      </Navbar>
    </Container>
  );
}

export default Header;
