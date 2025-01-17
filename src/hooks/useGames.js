import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
function useGames(selectedGenre, selectedPlatform, sortBy) {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const {
          data: { results: gameData },
        } = await apiClient.get(`/games`, {
          params: {
            genres: selectedGenre?.id,
            parent_platforms: selectedPlatform?.id,
            ordering: sortBy?.value,
          },
        });
        setGames(gameData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    })();
  }, [selectedGenre?.id, selectedPlatform?.id, sortBy?.value]);
  return { games, error, isLoading };
}

export default useGames;
