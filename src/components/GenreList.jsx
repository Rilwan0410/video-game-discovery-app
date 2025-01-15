import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres } = useGenres();

  console.log(genres);
  return (
    <ul>
      {genres.map((genre) => {
        return <li>{genre.name}</li>;
      })}
    </ul>
  );
}

export default GenreList;
