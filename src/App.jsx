import { useState } from "react";
import Navbar from "./components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
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
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>

      <GridItem area="main">
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
