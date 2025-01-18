import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    colors: {
      white: {
        50: "#f9f9f9",
        100: "#ededed",
        300: "#b3b3b3",
        400: "#a0a0a0",
        500: "#898989",
        600: "#6c6c6c",
        700: "#202020",
        800: "#121212",
        900: "#111",
      },
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);
