import { useParams } from "react-router-dom";
import { Heading, Box, Stack, SimpleGrid } from "@chakra-ui/react";
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
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} paddingBottom="80px">
      <Stack>
        <Box padding={5}  >
          <Heading marginBottom={4} size="5xl">
            {data?.name}
          </Heading>

          <ExpandableText text={data?.description_raw} />
          <GameDetailsGrid game={data} />
        </Box>
      </Stack>
      <Stack >
        <GameTrailer params={params} />
        <GameScreenshots params={params} />
      </Stack>
    </SimpleGrid>
  );
}

export default GameDetails;
