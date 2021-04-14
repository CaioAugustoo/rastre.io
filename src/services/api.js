const base_url = "https://api.melhorrastreio.com.br/api/v1/trackings";

export const GET_ORDER_STATUS = code => {
  return {
    endpoint: `${base_url}/${code}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};
