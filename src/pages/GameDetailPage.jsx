import { useParams } from "react-router-dom";
import { base } from "../services/api-client";
import { Heading, Text, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SkeletonText, Skeleton } from "../components/ui/skeleton";
import { useColorMode } from "../components/ui/color-mode";
import GameDetailsGrid from "../components/GameDetailsGrid";
import APIClientService from "../services/api-client";
import ExpandableText from "../components/ExpandableText";
function GameDetails() {
  const apiClient = new APIClientService();

  const params = useParams();

  const { data, isLoading, error } = apiClient.getGame(["games", params.id]);
  const { data: movieData } = apiClient.getGame(["games", params.id, "movies"]);
  console.log(movieData);
  let vid =
    movieData?.results[Math.floor(Math.random() * movieData?.results.length)];

  return isLoading ? (
    <Box padding={5}>
      <SkeletonText noOfLines={1} padding={4} marginBottom="20px" />
      <Skeleton height="300px" />
    </Box>
  ) : (
    <Box padding={5} paddingBottom="80px" width="full">
      <Heading marginBottom={4} size="5xl">
        {data?.name}
      </Heading>
      <ExpandableText text={data?.description_raw} />

      <GameDetailsGrid game={data} />

      {vid ? (
        <video
          controls
          src={vid?.data["480"]}
          width={1100}
          poster={vid?.preview}
          style={{
            marginTop: "50px",
            marginInline: "auto",
          }}
        />
      ) : (
        ""
      )}
    </Box>
  );
}

export default GameDetails;
