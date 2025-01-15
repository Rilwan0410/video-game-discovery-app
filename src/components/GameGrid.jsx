import { Grid, GridItem, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Grid
      placeItems='center'
      padding={'10px'}
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3,1fr)",
        }}
        gap='6'
        gapX={{
            sm:'',
            md:'4',
            lg:'6',
            xl:''
        }}
      >
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
