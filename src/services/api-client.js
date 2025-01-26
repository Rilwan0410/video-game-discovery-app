import axios from "axios";

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
}

export default APIClientService;
export { base };
