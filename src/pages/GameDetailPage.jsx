import { useParams } from "react-router-dom";
import { Heading, Box } from "@chakra-ui/react";
import { SkeletonText, Skeleton } from "../components/ui/skeleton";
import GameDetailsGrid from "../components/GameDetailsGrid";
import APIClientService from "../services/api-client";
import ExpandableText from "../components/ExpandableText";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

function GameDetails() {
  const apiClient = new APIClientService();

  const params = useParams();

  const { data, isLoading, error } = apiClient.getGame(["games", params.id]);

  if (error) throw Error;

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
      <GameTrailer params={params} />
      <GameScreenshots params={params} />
    </Box>
  );
}

export default GameDetails;
