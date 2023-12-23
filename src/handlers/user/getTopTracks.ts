import axios from "axios";
import { getTopTracks } from "../../types/types";

export async function getTopTracks(params: getTopTracks) {
  try {
    const method = "user.gettoptracks";
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
    const TopTracks = await data.data.toptracks;
    return TopTracks;
  } catch (error) {
    console.error(error);
  }
}
