import axios from "axios";
import { getTopAlbums } from "../../types/types";

export async function getTopAlbums(params: getTopAlbums) {
  try {
    const method = "user.gettopalbums";
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
    const TopAlbums = await data.data.topalbums;
    return TopAlbums;
  } catch (error) {
    console.error(error);
  }
}
