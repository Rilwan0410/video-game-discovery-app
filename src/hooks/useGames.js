import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
function useGames() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  // console.log(games);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const {
          data: { results: gameData },
        } = await apiClient.get("/games");
        setGames(gameData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    })();
  }, []);
  return { games, error, isLoading };
}

export default useGames;
