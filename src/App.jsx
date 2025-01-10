import { useState } from "react";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // wider than 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>

        <GridItem hideBelow='lg' area="aside" bg="gold">
          Aside
        </GridItem>

      <GridItem area="main" bg="red">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
