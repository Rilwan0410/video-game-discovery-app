import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import store from "../store/store";
function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  //   const [searchby, setSearchby] = useState("");
  const { search, setSearch } = store();
  return (
    <Grid
      position="relative"
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // wider than 1024px
      }}
    >
      <GridItem hideBelow="lg" area="aside" paddingX={5}>
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>

      <GridItem area="main">
        <GameGrid
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
          searchby={search}
        />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
