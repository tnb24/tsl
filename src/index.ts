import { getTopArtists, getTopAlbums, getTopTracks, getRecentTracks, getInfo } from "./handlers/index";

export class Client {
  readonly KEY: string;
  API_LINK: string;

  public readonly getTopArtists = async (
    username: string,
    timePeriod?: string,
    artistLimit?: number,
    page?: number,
  ) => {
    try {
      return await getTopArtists({
        API_LINK: this.API_LINK,
        KEY: this.KEY,
        username,
        period: timePeriod,
        limit: artistLimit,
        page,
      });
    } catch (error) {
      console.error(error);
    }
  };

  public readonly getTopAlbums = async (username: string, timePeriod?: string, artistLimit?: number, page?: number) => {
    try {
      return await getTopAlbums({
        API_LINK: this.API_LINK,
        KEY: this.KEY,
        username,
        period: timePeriod,
        limit: artistLimit,
        page,
      });
    } catch (error) {
      console.error(error);
    }
  };

  public readonly getTopTracks = async (username: string, timePeriod?: string, artistLimit?: number, page?: number) => {
    try {
      return await getTopTracks({
        API_LINK: this.API_LINK,
        KEY: this.KEY,
        username,
        period: timePeriod,
        limit: artistLimit,
        page,
      });
    } catch (error) {
      console.error(error);
    }
  };

  public readonly getRecentTracks = async (
    username: string,
    limit?: number,
    from?: string,
    to?: string,
    extended?: number,
    page?: number,
  ) => {
    try {
      return await getRecentTracks({
        API_LINK: this.API_LINK,
        KEY: this.KEY,
        username,
        limit,
        from,
        to,
        extended,
        page,
      });
    } catch (error) {
      console.error(error);
    }
  };

  public readonly getInfo = async (username: string) => {
    try {
      const profileInfo = await getInfo({ API_LINK: this.API_LINK, KEY: this.KEY, username });
      return profileInfo;
    } catch (error) {
      console.error(error);
    }
  };

  constructor(API_KEY: string) {
    this.KEY = API_KEY;
    this.API_LINK = "http://ws.audioscrobbler.com/2.0";
  }
}
