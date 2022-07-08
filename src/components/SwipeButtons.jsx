import React from "react";
import {
  BsArrowCounterclockwise,
  BsFillStarFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { AiFillThunderbolt } from "react-icons/ai";
import { Buttons, SwiperContainer } from "../styles/components/SwipeButtonsStyle";
import { Button } from "../styles/components/HeaderStyle";

function SwipeButtons() {
  return (
    <SwiperContainer>
      <Buttons>
        <Button>
          <BsArrowCounterclockwise color="#f5b748" />
        </Button>
        <Button>
          <GrClose color="#e65e6f" />
        </Button>
        <Button>
          <BsFillStarFill color="#62b4f9" />
        </Button>
        <Button>
          <BsFillHeartFill color="#76e2b3" />
        </Button>
        <Button>
          <AiFillThunderbolt color="#915dd1" />
        </Button>
      </Buttons>
    </SwiperContainer>
  );
}

export default SwipeButtons;
