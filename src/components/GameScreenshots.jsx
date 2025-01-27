import React from "react";
import APIClientService from "../services/api-client";
import { SimpleGrid, Image } from "@chakra-ui/react";

function GameScreenshots({ params }) {
  const apiClient = new APIClientService();
  const { data } = apiClient.getGame(["games", params.id, "screenshots"]);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
      gap={4}
      paddingTop="150px"
    >
      {data?.results.map(({ image }, i) => (
        <Image key={i} src={image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
