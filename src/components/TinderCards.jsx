import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import {
  Card,
  TinderContainer,
  TinderName,
  TinderProfile,
} from "../styles/components/TinderCardStyle";
import axios from '../axios';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards');

      setPeople(req.data);
    }
    
    fetchData();
  }, [])
  

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  {console.log(people)}

  return (
    <TinderContainer>
      <Card>
        {people.map((person, key) => (
          <TinderCard
            className="swipe"
            key={key}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <TinderProfile src={person.imgUrl} />
            <TinderName>{person.name} </TinderName>
          </TinderCard>
        ))}
      </Card>
    </TinderContainer>
  );
}

export default TinderCards;
