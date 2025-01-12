import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";

import { Theme } from "@chakra-ui/react";
// import "./index.css";
import App from "./App.jsx";
import {
  ColorModeProvider,
  useColorMode,
} from "./components/ui/color-mode.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);
