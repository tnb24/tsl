import axios from "axios";

export async function getTopAlbums(
  API_LINK: string,
  KEY: string,
  username: string,
  period?: string,
  limit?: number,
  page?: number
) {
  try {
    const method = "user.gettopalbums";
    const data = await axios.get(API_LINK, {
      params: {
        method: method,
        username,
        api_key: KEY,
        format: "json",
        period,
        limit,
        page,
      },
    });
    const TopAlbums = await data.data.topalbums;
    return TopAlbums;
  } catch (error) {
    console.error(error);
  }
}
