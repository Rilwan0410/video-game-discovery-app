import { useParams } from "react-router-dom";
import store from "../store/store";
import { base } from "../services/api-client";
import { Heading, Text, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SkeletonText, Skeleton } from "../components/ui/skeleton";

function GameDetails() {
  const { setSlug, slug } = store();
  const params = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["gameDetails"],
    queryFn: async () => {
      const { data } = await base.get(`/games/${params.id}`);
      return data;
    },
  });

  // isLoading && <h1>Hello World</h1>;
  return isLoading ? (
    <Box padding={5}>
      <SkeletonText noOfLines={1} padding={4} marginBottom="20px" />
      <Skeleton height="300px" />
    </Box>
  ) : (
    <Box padding={5}>
      <Heading marginBottom={4} size="5xl">
        {data?.name}
      </Heading>
      <Text fontSize="lg">{data?.description_raw}</Text>
    </Box>
  );
}

export default GameDetails;
