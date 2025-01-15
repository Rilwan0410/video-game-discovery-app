import { Card, Image, Button, Text } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./PlatformIconList";

function GameCard({ game }) {
  return (
    <Card.Root
      maxW={{ sm: "", md: "450px", lg: "", xl: "sm" }}
      minH={{ sm: "", md: "sm", lg: "", xl: "sm" }}
      overflow="hidden"
    >
      <Image
        minH={{ sm: "", md: "2xs", lg: "", xl: "xs" }}
        src={game.background_image}
      />
      <Card.Body>
        <Card.Title fontSize={"xl"}>{game.name}</Card.Title>
        {/* <Card.Description> */}
          <PlatformIconList game={game} />
        {/* </Card.Description> */}
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
