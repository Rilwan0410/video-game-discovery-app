import { Badge } from "@chakra-ui/react";
function CriticScore({ score }) {
  let color = score > 80 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize="15px"
    //   colorScheme={color}
      padding="5px"
      colorPalette={color}
      width="fit-content"
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
