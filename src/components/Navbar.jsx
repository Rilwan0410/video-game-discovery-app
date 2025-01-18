import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useColorMode } from "./ui/color-mode";

function Navbar({ searchby, setSearchby }) {
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
      <a href="">
        <Image src={logo} boxSize="60px" />
      </a>
      <SearchInput searchby={searchby} setSearchby={setSearchby} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
