import APIClientService from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

function usePlatforms() {
  const apiClient = new APIClientService("/platforms/lists/parents");
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get(),
    staleTime: 86_400_000,
  });
}

export default usePlatforms;
