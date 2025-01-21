import { Grid, GridItem, Spinner, HStack, Button } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import GameHeading from "./GameHeading";

function GameGrid({
  selectedGenre,
  selectedPlatform,
  setSelectedPlatform,
  sortBy,
  setSortBy,
  searchby,
}) {
  // Ignore...
  function renderSkeleton(amount) {
    let arr = [];

    for (let i = 0; i < amount; i++) {
      arr.push(amount);
    }

    return arr.map((each, index) => <GameCardSkeleton key={index} />);
  }
  // Ignore...

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(selectedGenre, selectedPlatform, sortBy, searchby);

  // console.log(data);

  return (
    <>
      <GameHeading
        selectedPlatform={selectedPlatform}
        selectedGenre={selectedGenre}
        searchby={searchby}
      />

      {isLoading ? (
        <Spinner size="xs" marginLeft="25px" />
      ) : (
        <HStack gap={"5"} marginLeft="8px" marginBottom={5}>
          <PlatformSelector
            isLoading={isLoading}
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
          />
          <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
        </HStack>
      )}
      <Grid
        placeItems="center"
        padding={"10px"}
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3,1fr)",
        }}
        gap="6"
        gapX={{
          sm: "",
          md: "4",
          lg: "6",
          xl: "",
        }}
      >
        {isLoading && renderSkeleton(10)}

        {data?.pages.map((game) =>
          game?.results.map((g) => {
            return (
              <GridItem borderRadius={10} key={g.id}>
                <GameCard game={g} />
              </GridItem>
            );
          })
        )}
      </Grid>
      {hasNextPage && (
        <Button
          marginY="25px"
          width="130px"
          marginLeft="10px"
          variant="subtle"
          onClick={() => {
            fetchNextPage();
          }}
        >
          {isFetchingNextPage ? <Spinner /> : "Load More"}
        </Button>
      )}
    </>
  );
}

export default GameGrid;
