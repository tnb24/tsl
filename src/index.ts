import { getTopArtists, getTopAlbums, getTopTracks, getRecentTracks, getInfo } from "./handlers/index";

export class Client {
  readonly KEY: string;
  API_LINK: string;

  public readonly getTopArtists = (
    username: string,
    timePeriod?: string,
    artistLimit?: number,
    page?: number
  ) => getTopArtists({ API_LINK: this.API_LINK, KEY: this.KEY, username, period: timePeriod, limit: artistLimit, page });

  public readonly getTopAlbums = (
    username: string,
    timePeriod?: string,
    artistLimit?: number,
    page?: number
  ) => getTopAlbums({ API_LINK: this.API_LINK, KEY: this.KEY, username, period: timePeriod, limit: artistLimit, page});

  public readonly getTopTracks = (
    username: string,
    timePeriod?: string,
    artistLimit?: number,
    page?: number
  ) => getTopTracks({ API_LINK: this.API_LINK, KEY: this.KEY, username, period: timePeriod, limit: artistLimit, page});

  public readonly getRecentTracks = (
    username: string,
    limit?: number,
    from?: string,
    to?: string,
    extended?: number,
    page?: number
  ) => getRecentTracks({ API_LINK: this.API_LINK, KEY: this.KEY, username, limit, from, to, extended, page });

  public readonly getInfo = (username: string) => getInfo({ API_LINK: this.API_LINK, KEY: this.KEY, username});

  constructor(API_KEY: string) {
    this.KEY = API_KEY;
    this.API_LINK = "http://ws.audioscrobbler.com/2.0";
  }
}
