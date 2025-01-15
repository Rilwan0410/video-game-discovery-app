// import React from "react";
import { HStack, Stack } from "@chakra-ui/react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "../components/ui/skeleton";

function GameCardSkeleton() {
  return (
    <Stack>
      <Skeleton height={{ sm: "", md: "2xs", lg: "", xl: "xs" }} width="sm" />
      <SkeletonText noOfLines={1} marginTop="5px" />
      <HStack>
        <SkeletonText noOfLines={1} width={"200px"} />
        <SkeletonCircle size="7" />
      </HStack>
    </Stack>
  );
}

export default GameCardSkeleton;
