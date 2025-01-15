import useGenres from "../hooks/useGenres";
import { HStack, Image, List, Text } from "@chakra-ui/react";

function GenreList() {
  const { genres } = useGenres();

  console.log(genres);
  return (
    <List.Root listStyle={"none"}  gap={4}>
      {genres.map((genre, index) => {
        return (
          <List.Item key={index}>
            <HStack>
              <Image src={genre.image_background} borderRadius={8} boxSize="32px" />
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </List.Item>
        );
      })}
    </List.Root>
  );
}

export default GenreList;
