import axios from "axios";
import { getRecentTracks } from "../../types/types";

export async function getRecentTracks(params: getRecentTracks) {
  try {
    const method = "user.getrecenttracks";
    const data = await axios.get(params.API_LINK, {
      params: {
        method,
        username: params.username,
        limit: params.limit,
        api_key: params.KEY,
        format: "json",
        from: params.from,
        to: params.to,
        extended: params.extended,
        page: params.page,
      },
    });
    const RecentTracks = await data.data.recenttracks;
    return RecentTracks;
  } catch (error) {
    console.error(error);
  }
}
