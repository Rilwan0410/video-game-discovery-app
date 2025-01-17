import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

function SortSelector() {
  return (
    <MenuRoot>
      <MenuTrigger outline="none" asChild>
        <Button >
          Order By: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent outline="none" width="190px">
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="date">Date added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="release">Release Date</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="average-rating">Average Rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}

export default SortSelector;
