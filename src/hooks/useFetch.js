import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setData(json);
    } catch (err) {
      setLoading(false);
      json = null;
      console.log(err);
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
  };
};

export default useFetch;
