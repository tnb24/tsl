import axios from "axios";
import { getTopArtists } from "../../types/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getTopArtists(params: getTopArtists) {
  try {
    const method = "user.gettopartists";
    const data = await axios.get(params.API_LINK, {
      params: {
        method,
        username: params.username,
        api_key: params.KEY,
        format: "json",
        period: params.period,
        limit: params.limit,
        page: params.page,
      },
    });
    const TopArtists = await data.data.topartists;
    return TopArtists;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
