import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

function usePlatforms() {
  const [platform, setPlatform] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const {
          data: { results: platformData },
        } = await apiClient.get("/platforms/lists/parents");
        setPlatform(platformData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    })();
  }, []);

  return { platform, error, isLoading };
}

export default usePlatforms;