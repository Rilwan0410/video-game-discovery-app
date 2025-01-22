import { useInfiniteQuery } from "@tanstack/react-query";
import APIClientService from "../services/api-client";

function useGames(selectedGenre, selectedPlatform, sortBy, searchby) {
  const apiClient = new APIClientService("games");
  return useInfiniteQuery({
    queryKey: [
      "games",
      selectedGenre?.id,
      selectedPlatform?.id,
      sortBy?.value,
      searchby,
    ],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get({
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
        ordering: sortBy?.value,
        search: searchby,
        page: pageParam,
      }),
    staleTime: 86_400_000,
    getNextPageParam: (lastPage, allPages) => {
      // console.log("last page:", lastPage);
      // console.log("all pages:", allPages);
      return lastPage.next ? allPages.length + 1 : undefined;

      // return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
}

export default useGames;
