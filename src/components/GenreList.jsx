import useGenres from "../hooks/useGenres";
import { HStack, Image, List, Text, Spinner, Link } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";
function GenreList({ onSelectGenre }) {
  const { genres, isLoading, error } = useGenres();

  if (error) return null;
  return (
    <>
      {isLoading && (
        <HStack width="120px">
          <Spinner />
        </HStack>
      )}
      <List.Root listStyle={"none"} gap={4}>
        {genres.map((genre, index) => {
          return (
            <List.Item key={index}>
              <HStack>
                <Image
                  src={genre.image_background}
                  borderRadius={8}
                  boxSize="32px"
                />
                <Link onClick={() => onSelectGenre(genre)} fontSize="lg">
                  {genre.name}
                </Link>
              </HStack>
            </List.Item>
          );
        })}
      </List.Root>
    </>
  );
}

export default GenreList;
