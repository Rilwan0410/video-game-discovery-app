import React from "react";
import APIClientService from "../services/api-client";
import { SimpleGrid, Image, Link } from "@chakra-ui/react";

function GameScreenshots({ params }) {
  const apiClient = new APIClientService();
  const { data } = apiClient.getGame(["games", params.id, "screenshots"]);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
      gap={4}
      //   gapY={8}

      paddingX={5}
      paddingTop="50px"
    >
      {data?.results.map(({ image }, i) => (
        <Link href={image} outline="none">
          <Image borderRadius={2} key={i} src={image} />
        </Link>
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
