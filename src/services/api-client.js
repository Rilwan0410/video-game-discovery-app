import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const base = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "8abd46b86e214b45b1bbf42b0a150b33" },
});

class APIClientService {
  constructor(path) {
    this.path = path;
  }
  async get(parameters) {
    const { data } = await base.get(this.path, {
      params: { ...parameters },
    });
    return data;
  }

  getGame([...paths]) {
    const urlString = paths.map((path) => `/${path}`).join("");
    // console.log(urlString);
    const data = useQuery({
      staleTime: 86_400_000,
      queryKey: [...paths],
      queryFn: async () => {
        const { data } = await base.get(urlString);
        return data;
      },
    });
    return data;
  }
}

export default APIClientService;
export { base };
