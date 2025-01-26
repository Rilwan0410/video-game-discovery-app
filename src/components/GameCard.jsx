import { Card, Image } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./PlatformIconList";
import placeholderImage from "../assets/no-image-placeholder.webp";
import { Link } from "react-router-dom";
function GameCard({ game }) {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card.Root
        _hover={{
          scale: "1.02",
          transitionTimingFunction: "ease-in-out",
          transitionDuration: "slower",
        }}
        transitionDelay="slow"
        cursor="pointer"
        maxW={{ sm: "", md: "450px", lg: "", xl: "sm" }}
        minH={{ sm: "", md: "sm", lg: "", xl: "sm" }}
        overflow="hidden"
      >
        <Image
          minH={{ sm: "", md: "2xs", lg: "", xl: "xs" }}
          minW="xs"
          maxH={{ sm: "", md: "2xs", lg: "", xl: "xs" }}
          src={game.background_image || placeholderImage}
        />
        <Card.Body>
          <Card.Title fontSize={"xl"}>{game.name}</Card.Title>
          <PlatformIconList game={game} />
        </Card.Body>
      </Card.Root>
    </Link>
  );
}

export default GameCard;
