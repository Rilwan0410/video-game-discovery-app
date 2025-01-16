import { Grid, GridItem, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import PlatformSelector from "./PlatformSelector";

function GameGrid({ selectedGenre, selectedPlatform, setSelectedPlatform }) {
  const { games, error, isLoading } = useGames(selectedGenre,selectedPlatform);

  function renderSkeleton(amount) {
    let arr = [];

    for (let i = 0; i < amount; i++) {
      arr.push(amount);
    }

    return arr.map((each, index) => <GameCardSkeleton key={index} />);
  }

  return (
    <>
      {error && <Text>{error}</Text>}
      <PlatformSelector
        isLoading={isLoading}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />
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
