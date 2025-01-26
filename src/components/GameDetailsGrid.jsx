import { Grid, GridItem, Box, Heading, Text } from "@chakra-ui/react";

import { Badge } from "@chakra-ui/react";
function GameDetailsGrid({ game, colorMode }) {
  console.log(game);
  return (
    <Grid templateColumns="repeat(2, 1fr)" gapY={20} paddingTop={10}>
      <GridItem height="auto">
        <Box>
          <Heading
            size="xl"
            fontWeight="bold"
            style={{
              color: colorMode === "dark" ? "gray" : "black",
            }}
          >
            Platform
          </Heading>
          {game?.parent_platforms.map(({ platform }, index) => (
            <Text key={index}>{platform.name}</Text>
          ))}
        </Box>
      </GridItem>
      <GridItem height="auto">
        <Box>
          <Heading
            size="xl"
            fontWeight="bold"
            style={{ color: colorMode === "dark" ? "gray" : "black" }}
          >
            Metascore
          </Heading>
          <Badge
            colorPalette={"green"}
            size="md"
            fontWeight="bold"
            fontSize="md"
            paddingX={2}
            marginTop={2}
          >
            {game?.metacritic}
          </Badge>
        </Box>
      </GridItem>
      <GridItem height="auto">
        <Box>
          <Heading
            size="xl"
            fontWeight="bold"
            style={{
              color: colorMode === "dark" ? "gray" : "black",
            }}
          >
            Genre
          </Heading>
          {game?.genres.map((genre, index) => (
            <Text key={index}>{genre.name}</Text>
          ))}
        </Box>
      </GridItem>
      <GridItem height="auto">
        <Box>
          <Heading
            size="xl"
            fontWeight="bold"
            style={{ color: colorMode === "dark" ? "gray" : "black" }}
          >
            Publishers
          </Heading>
          {game?.publishers.map((p, index) => (
            <Text key={index}>{p.name}</Text>
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
}

export default GameDetailsGrid;
