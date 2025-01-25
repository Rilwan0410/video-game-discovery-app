import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useColorMode } from "./ui/color-mode";
import store from "../store/store";

function Navbar() {
  const { search, setSearch } = store();
  const { colorMode } = useColorMode();
  return (
    <HStack
      background={colorMode === "dark" ? "black" : "white"}
      position="fixed"
      zIndex={10}
      top="0"
      justifyContent="space-between"
      paddingX="20px"
      paddingTop="15px"
      paddingBottom="10px"
      width="full"
    >
      <a href="/">
        <Image src={logo} boxSize="60px" />
      </a>
      <SearchInput searchby={search} setSearchby={setSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
