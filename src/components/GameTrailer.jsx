import APIClientService from "../services/api-client";

function GameTrailer({ params }) {
  const apiClient = new APIClientService();
  const { data: movieData } = apiClient.getGame(["games", params.id, "movies"]);
  let vid =
    movieData?.results[Math.floor(Math.random() * movieData?.results.length)];
  return (
    <>
      {vid ? (
        <video
          controls
          src={vid?.data["480"]}
          width={1100}
          poster={vid?.preview}
          style={{
            marginTop: "50px",
            marginInline: "auto",
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default GameTrailer;
