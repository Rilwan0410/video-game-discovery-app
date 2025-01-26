import { useParams } from "react-router-dom";
import { base } from "../services/api-client";
import { Heading, Text, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SkeletonText, Skeleton } from "../components/ui/skeleton";
import { useColorMode } from "../components/ui/color-mode";
import GameDetailsGrid from "../components/GameDetailsGrid";
function GameDetails() {
  const { colorMode } = useColorMode();
  let [collapseString, setCollapseString] = useState(true);
  const params = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["game"],
    queryFn: async () => {
      const { data } = await base.get(`/games/${params.id}`);
      return data;
    },
    staleTime: 86_400_000,
  });


  return isLoading ? (
    <Box padding={5}>
      <SkeletonText noOfLines={1} padding={4} marginBottom="20px" />
      <Skeleton height="300px" />
    </Box>
  ) : (
    <Box padding={5}>
      <Heading marginBottom={4}  size="5xl">
        {data?.name}
      </Heading>
      <Text fontSize="lg">
        {data?.description_raw.length > 400 && collapseString === true ? (
          <>
            <span>{data?.description_raw.substring(0, 400)}... </span>
          </>
        ) : (
          data?.description_raw
        )}
        {data?.description_raw.length > 400 && (
          <Button
            bg={colorMode === "dark" ? "#FFFF80" : "gold"}
            color="black"
            fontSize="sm"
            size="xs"
            fontWeight="bold"
            borderRadius="lg"
            display={collapseString ? "" : "block"}
            onClick={() => setCollapseString(!collapseString)}
          >
            {collapseString ? "Show More" : "Show Less"}
          </Button>
        )}
      </Text>

      <GameDetailsGrid game={data} colorMode={colorMode} />
    </Box>
  );
}

export default GameDetails;
