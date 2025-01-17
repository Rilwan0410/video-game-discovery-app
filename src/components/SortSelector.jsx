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

function SortSelector({ sortBy, setSortBy }) {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <MenuRoot>
      <MenuTrigger outline="none" asChild>
        <Button>
          Order By: {sortBy?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent outline="none" width="190px">
        {sortOrder.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => {
              setSortBy({ value: order.value, label: order.label });
            }}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default SortSelector;
