import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import "./index.css";
// import App from "./App.jsx";
import { ColorModeProvider } from "./components/ui/color-mode.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ColorModeProvider>
          <RouterProvider router={router} />
        </ColorModeProvider>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
