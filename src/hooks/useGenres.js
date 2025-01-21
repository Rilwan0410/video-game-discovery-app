import genresData from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClientService from "../services/api-client";

function useGenres() {
  const apiClient = new APIClientService("genres");
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get(),
    staleTime: 86_400_000,
    initialData: genresData,
  });
}

export default useGenres;
