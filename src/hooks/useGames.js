import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

function useGames(selectedGenre, selectedPlatform, sortBy, searchby) {
  return useQuery({
    queryKey: [
      "games",
      selectedGenre?.id,
      selectedPlatform?.id,
      sortBy?.value,
      searchby?.id,
    ],
    queryFn: async () => {
      const { data } = await apiClient.get(`/games`, {
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          ordering: sortBy?.value,
          search: searchby,
        },
      });
      return data;
    },
    staleTime: 86_400_000,
  });
}

export default useGames;
