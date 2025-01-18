import { Grid, GridItem, Text, HStack } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { Spinner } from "@chakra-ui/react";
import GameHeading from "./GameHeading";

function GameGrid({
  selectedGenre,
  selectedPlatform,
  setSelectedPlatform,
  sortBy,
  setSortBy,
  searchby,
}) {
  const { games, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    sortBy,
    searchby
  );

  function renderSkeleton(amount) {
    let arr = [];

    for (let i = 0; i < amount; i++) {
      arr.push(amount);
    }

    return arr.map((each, index) => <GameCardSkeleton key={index} />);
  }

  return (
    <>
      <GameHeading
        selectedPlatform={selectedPlatform}
        selectedGenre={selectedGenre}
    searchby={searchby}
      />
      {error && <Text>{error}</Text>}
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

        {games.map((game) => (
          <GridItem borderRadius={10} key={game.id}>
            <GameCard game={game} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default GameGrid;


