import axios from "axios";

export class Client {
  readonly KEY: string;
  API_LINK: string;
  constructor(API_KEY: string) {
    this.KEY = API_KEY,
    this.API_LINK = "http://ws.audioscrobbler.com/2.0"
  }
  async getTopArtists(username: string, period?: string, limit?: number, page?: number) {
    try {
      const method = "user.gettopartists";
      const data = await axios.get(this.API_LINK, {
        params: {
          method: method,
          username,
          api_key: this.KEY,
          format: "json",
          period,
          limit,
          page,
        },
      });
      const TopArtists = await data.data.topartists;
      console.dir(TopArtists);
      return TopArtists;
    } catch (error) {
      console.error(error);
    }
  }
}
