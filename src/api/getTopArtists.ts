import { httpClient } from "../utils/client";
import { GetTopArtistsResponse } from "../types/types";

export const getTopArtists = async (
  username: string,
  period?: string,
  limit?: number,
  page?: number
): Promise<GetTopArtistsResponse> => {
  const params = {
    method: "user.gettopartists",
    user: username,
    period,
    limit,
    page
  };
  return await httpClient<GetTopArtistsResponse>(params);
};
