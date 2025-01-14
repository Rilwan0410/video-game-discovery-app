import { Card, Image, Button, Text } from "@chakra-ui/react";
import React from "react";

function GameCard({ game }) {
  return (
    <Card.Root
      maxW={{ sm: "", md: "350px", lg: "", xl: "sm" }}
      minH={{ sm: "", md: "sm", lg: "", xl: "sm" }}
      overflow="hidden"
    >
      <Image
        minH={{ sm: "", md: "2xs", lg: "", xl: "xs" }}
        src={game.background_image}
      />
      <Card.Body>
        <Card.Title fontSize={"xl"}>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
