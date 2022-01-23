import axios from "axios";

export async function getRecentTracks(
  API_LINK: string,
  KEY: string,
  username: string,
  from?: string,
  to?: string,
  extended?: number,
  page?: number
) {
  try {
    const method = "user.getrecenttracks";
    const data = await axios.get(API_LINK, {
      params: {
        method: method,
        username,
        api_key: KEY,
        format: "json",
        from,
        to,
        extended,
        page,
      },
    });
    const RecentTracks = await data.data.recenttracks;
    return RecentTracks;
  } catch (error) {
    console.error(error);
  }
}
