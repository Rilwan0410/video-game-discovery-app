import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
function ErrorPage() {
  const { error, statusText } = useRouteError();

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading size="6xl">Oops...</Heading>
        <Text size="2xl">
          {statusText === "Not Found"
            ? "This page does not exist."
            : "Sorry an unexpected error has occurred"}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
