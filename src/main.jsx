import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import App from "./App.jsx";
import { ColorModeProvider } from "./components/ui/color-mode.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);
