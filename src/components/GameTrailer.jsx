import APIClientService from "../services/api-client";

function GameTrailer({ params }) {
  const apiClient = new APIClientService();
  const { data } = apiClient.getGame(["games", params.id, "movies"]);

  let vid = data?.results[Math.floor(Math.random() * data?.results.length)];

  return (
    <>
      {vid ? (
        <video
          controls
          src={vid?.data["480"]}
          width={1100}
          poster={vid?.preview}
          style={{
            padding: "20px",
            marginTop: "20px",
            paddingBotton:'50px',
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
