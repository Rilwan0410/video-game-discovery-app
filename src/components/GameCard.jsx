import { Card, Image } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./PlatformIconList";
import placeholderImage from '../assets/no-image-placeholder.webp'

function GameCard({ game }) {
  return (
    <Card.Root
      maxW={{ sm: "", md: "450px", lg: "", xl: "sm" }}
      minH={{ sm: "", md: "sm", lg: "", xl: "sm" }}
      overflow="hidden"
    >
      <Image
        minH={{ sm: "", md: "2xs", lg: "", xl: "xs" }}
        minW='xs'
        maxH={{ sm: "", md: "2xs", lg: "", xl: "xs" }}
        src={game.background_image || placeholderImage}
      />
      <Card.Body>
        <Card.Title fontSize={"xl"}>{game.name}</Card.Title>
        <PlatformIconList game={game} />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
