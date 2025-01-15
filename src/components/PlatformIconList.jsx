import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

const iconObject = {
  Linux: <FaLinux  key={Math.random() * 10000} color ='#A0AEC0'/>,
  PlayStation: <FaPlaystation key={Math.random() * 10000} color ='#A0AEC0'/>,
  Xbox: <FaXbox key={Math.random() * 10000} color ='#A0AEC0'/>,
  Macintosh: <FaApple key={Math.random() * 10000} color ='#A0AEC0'/>,
  PC: <FaWindows key={Math.random() * 10000} color ='#A0AEC0'/>,
  Android: <FaAndroid key={Math.random() * 10000} color ='#A0AEC0'/>,
  Nintendo: <SiNintendo key={Math.random() * 10000} color ='#A0AEC0'/>,
};

// Object.keys(iconObject).map(icon => console.log(iconObject[icon]))

function PlatformIconList({ game }) {
  return (
    <HStack marginTop={2}>
      {game.parent_platforms.map(
        (platform, index) => iconObject[platform.platform.name]
      )}
    </HStack>
  );
}

export default PlatformIconList;
