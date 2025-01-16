import useGenres from "../hooks/useGenres";
import { HStack, Image, List, Text, Spinner, Link } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";
function GenreList({ onSelectGenre, selectedGenre }) {
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
                <Link
                  variant={
                    selectedGenre?.name === genre.name ? "underline" : ""
                  }
                  fontWeight={selectedGenre?.name === genre.name ? "bold" : ""}
                  fontSize={selectedGenre?.name === genre.name ? "xl" : "lg"}
                  onClick={() => onSelectGenre(genre)}
                >
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
