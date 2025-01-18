import { HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaApple,
} from "react-icons/fa";
import { useColorMode } from "./ui/color-mode";
import { SiNintendo, SiAtari, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import CriticScore from "./CriticScore";
import { GiRetroController } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";

function PlatformIconList({ game }) {
  const { colorMode } = useColorMode();
  const iconObject = {
    "Neo Geo": (
      <GiRetroController
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    SEGA: (
      <SiSega
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    iOS: (
      <MdPhoneIphone
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    Atari: (
      <SiAtari
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    Web: (
      <BsGlobe
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    Linux: (
      <FaLinux
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    PlayStation: (
      <FaPlaystation
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    Xbox: (
      <FaXbox
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    "Apple Macintosh": (
      <FaApple
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    PC: (
      <FaWindows
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    Android: (
      <FaAndroid
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
    Nintendo: (
      <SiNintendo
        key={Math.random() * 10000}
        color={colorMode === "dark" ? "#A0AEC0" : "black"}
      />
    ),
  };

  return (
    <HStack display="flex" justifyContent="space-between" marginTop={2}>
      <div style={{ display: "flex", gap: "10px" }}>
        {game.parent_platforms.map(
          (platform) => iconObject[platform.platform.name]
        )}
      </div>
      <CriticScore score={game.metacritic} />
    </HStack>
  );
}

export default PlatformIconList;
