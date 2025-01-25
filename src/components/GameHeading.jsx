import { Heading } from "@chakra-ui/react";
import { capitalizeEachWord } from "../utils/capitalize";
function GameHeading({ selectedGenre, selectedPlatform, searchby }) {
  return (
    <Heading marginLeft="20px" size="6xl" paddingBottom="30px">
      {selectedPlatform?.name || ""} {selectedGenre?.name || ""} Games
      {searchby.length ? `: ${capitalizeEachWord(searchby)}` : ""}
    </Heading>
  );
}

export default GameHeading;
