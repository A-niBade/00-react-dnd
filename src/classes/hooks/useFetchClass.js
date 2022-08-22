import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchClass = (url) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(false);

  const getResults = async () => {
    try {
      const { data } = await axios.get(url);
      setResults(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getResults();
  }, [url]);

  return { results, isLoading, error };
};
