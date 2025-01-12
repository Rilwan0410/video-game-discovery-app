import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "bea29dd1a6694f39ae0d93f2ec4e0706" },
});
