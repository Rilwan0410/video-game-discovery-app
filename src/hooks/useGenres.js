import genresData from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const res = await apiClient.get("/genres");
      return res.data;
    },
    staleTime: 86_400_000,
    initialData: genresData,
  });
}

export default useGenres;
