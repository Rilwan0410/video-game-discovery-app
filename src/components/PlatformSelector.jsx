import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector({ selectedPlatform, setSelectedPlatform }) {
  const { colorMode } = useColorMode();
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild outline="none">
          <Button
            marginLeft="12px"
            outline="none"
            background={colorMode === "dark" ? "#202020" : "#ededed"}
            color={colorMode === "dark" ? "white" : "black"}
            fontWeight="500"
          >
            {selectedPlatform?.name || "Platforms"}
            <BsChevronDown style={{ marginTop: "3px", width: "15px" }} />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data?.results?.map((platform) => {
            return (
              <MenuItem
                value={platform.slug}
                cursor={"pointer"}
                key={platform.id}
                onClick={() => {
                  setSelectedPlatform(platform);
                }}
              >
                {platform.name}
              </MenuItem>
            );
          })}
        </MenuContent>
      </MenuRoot>
    </>
  );
}

export default PlatformSelector;
