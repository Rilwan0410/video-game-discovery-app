import { Heading } from "@chakra-ui/react";

function GameHeading({ selectedGenre, selectedPlatform, searchby }) {
  return (
    <Heading marginLeft="20px" size="6xl" paddingBottom="30px">
      {selectedPlatform?.name || ""} {selectedGenre?.name || ""} Games{searchby.length ? `: ${(searchby.toUpperCase())}` : ''}
    </Heading>
  );
}

export default GameHeading;
