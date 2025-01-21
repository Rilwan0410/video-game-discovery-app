// import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import APIClientService from "../services/api-client";

function useGames(selectedGenre, selectedPlatform, sortBy, searchby) {
  const apiClient = new APIClientService("games", {
    genres: selectedGenre?.id,
    parent_platforms: selectedPlatform?.id,
    ordering: sortBy?.value,
    search: searchby,
  });
  return useQuery({
    queryKey: [
      "games",
      selectedGenre?.id,
      selectedPlatform?.id,
      sortBy?.value,
      searchby?.id,
    ],
    queryFn: () => apiClient.get(),
    staleTime: 86_400_000,
  });
}

export default useGames;
