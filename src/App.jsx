import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <h2 className="text-red-500">Testing</h2>
      <HStack>
        <Button >Click Me!</Button>
      </HStack>
    </div>
  );
}

export default App;
