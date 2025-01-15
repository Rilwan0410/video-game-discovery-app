import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

function useGenres() {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const {
          data: { results: genresData },
        } = await apiClient.get("/genres");
        setGenres(genresData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    })();
  }, []);

  return { genres, error, isLoading };
}

export default useGenres;
