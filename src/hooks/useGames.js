import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
function useGames() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
console.log(games)
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { results: gameData },
        } = await apiClient.get("/games");
        setGames(gameData);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);
  return { games, error };
}

export default useGames;
