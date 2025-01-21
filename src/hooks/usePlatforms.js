import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: async () => {
      const { data } = await apiClient.get("/platforms/lists/parents");
      return data;
    },
    staleTime: 86_400_000,
  });
}

export default usePlatforms;
