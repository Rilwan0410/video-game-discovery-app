import useGenres from "../hooks/useGenres";
import { HStack, Image, List, Spinner, Link } from "@chakra-ui/react";
import store from "../store/store";
function GenreList() {
  const { data, isLoading, error } = useGenres();
  const { genre: selectedGenre, setGenre } = store();

  if (error) return null;
  return (
    <>
      {isLoading && (
        <HStack width="120px">
          <Spinner />
        </HStack>
      )}
      <List.Root listStyle={"none"} gap={4}>
        {data?.results.map((genre, index) => {
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
                  onClick={() => setGenre(genre)}
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
