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

function PlatformSelector({
//   isLoading,
  selectedPlatform,
  setSelectedPlatform,
}) {
  const { platform, error } = usePlatforms();
  if (error) return null;
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild outline="none">
          <Button marginLeft="12px" outline="none" fontWeight="500">
            {selectedPlatform?.name || "Platforms"}
            <BsChevronDown style={{ marginTop: "3px", width: "15px" }} />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {platform.map((platform) => {
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
