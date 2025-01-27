import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useColorMode } from "./ui/color-mode";

function ExpandableText({ text }) {
  const { colorMode } = useColorMode();
  const [collapseString, setCollapseString] = useState(true);
  return (
    <Text fontSize="lg">
      {text.length > 400 && collapseString === true ? (
        <>
          <span>{text.substring(0, 400)}... </span>
        </>
      ) : (
        text
      )}
      {text.length > 400 && (
        <Button
          bg={colorMode === "dark" ? "#FFFF80" : "gold"}
          color="black"
          fontSize="sm"
          size="xs"
          fontWeight="bold"
          borderRadius="lg"
          display={collapseString ? "" : "block"}
          onClick={() => setCollapseString(!collapseString)}
        >
          {collapseString ? "Show More" : "Show Less"}
        </Button>
      )}
    </Text>
  );
}

export default ExpandableText;
