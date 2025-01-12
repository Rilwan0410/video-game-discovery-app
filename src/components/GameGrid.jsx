import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

function GameGrid() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

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
  }, [games]);

  return (
    <>
      {error && <Text>{error}</Text>} 
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
