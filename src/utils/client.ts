import axios, { AxiosResponse } from "axios";
import { BASE_URL, LASTFM_TOKEN } from "./config";

interface HttpClientParams {
  method: string;
  user: string;
  period?: string;
  limit?: number;
  [key: string]: string | number | undefined;
}

export const httpClient = async <T>(params: HttpClientParams): Promise<T> => {
  const response: AxiosResponse<T> = await axios.get(BASE_URL, {
    params: {
      ...params,
      api_key: LASTFM_TOKEN,
      format: "json",
    },
  });
  return response.data;
};
