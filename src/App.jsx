import { useState } from "react";
import Navbar from "./components/Navbar";
import { Button, Grid, GridItem, Show, Theme } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";

function App() {
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

      <GridItem hideBelow="lg" area="aside">
        Aside
      </GridItem>

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
