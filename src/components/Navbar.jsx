import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <HStack
      justifyContent="space-between"
      paddingX="20px"
      paddingTop="15px"
      paddingBottom="55px"
    >
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
