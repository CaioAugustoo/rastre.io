import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError("");
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setData(json);
    } catch (err) {
      setLoading(false);
      response = null;
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    request,
    data,
    loading,
    error,
  };
};

export default useFetch;
