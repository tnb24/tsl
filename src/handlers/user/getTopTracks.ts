import axios from "axios";

export async function getTopTracks(
  API_LINK: string,
  KEY: string,
  username: string,
  period?: string,
  limit?: number,
  page?: number
) {
  try {
    const method = "user.gettoptracks";
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
    const TopTracks = await data.data.toptracks;
    return TopTracks;
  } catch (error) {
    console.error(error);
  }
}
