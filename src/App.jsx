import { useState } from "react";
import Navbar from "./components/Navbar";
import { Button, Grid, GridItem, Show, Theme } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  // console.log(selectedGenre);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // wider than 1024px
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <GridItem hideBelow="lg" area="aside" paddingX={5}>
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
