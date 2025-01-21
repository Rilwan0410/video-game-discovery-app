import axios from "axios";

const base = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "bea29dd1a6694f39ae0d93f2ec4e0706" },
});

class APIClientService {
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  async get() {
    const { data } = await base.get(this.path, {
      params: { ...this.parameters },
    });
    return data;
  }
}

export default APIClientService;
