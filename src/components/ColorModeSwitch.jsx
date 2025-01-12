import { HStack, Text, Icon } from "@chakra-ui/react";
import { Switch } from "../components/ui/switch";
import { useColorMode } from "./ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { BsXSquare } from "react-icons/bs";

function ColorModeSwitch() {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        size="lg"
        onCheckedChange={toggleColorMode}
        checked={colorMode === "light" ? true : false}
        trackLabel={{
          on: <FaMoon style={{ color: "lightgray" }} />,
          off: <FaSun style={{ color: "gold" }} />,
        }}
      />
    </HStack>
  );
}

export default ColorModeSwitch;
