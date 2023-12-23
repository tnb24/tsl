import { getTopArtists, getTopAlbums, getTopTracks, getRecentTracks, getInfo } from "./handlers/index";

export class Client {
  readonly KEY: string;
  API_LINK: string;

  public readonly getTopArtists = (
    username: string,
    timePeriod?: string,
    artistLimit?: number,
    page?: number
  ) => getTopArtists(this.API_LINK, this.KEY, username, timePeriod, artistLimit, page);

  public readonly getTopAlbums = (
    username: string,
    timePeriod?: string,
    artistLimit?: number,
    page?: number
  ) => getTopAlbums(this.API_LINK, this.KEY, username, timePeriod, artistLimit, page);

  public readonly getTopTracks = (
    username: string,
    timePeriod?: string,
    artistLimit?: number,
    page?: number
  ) => getTopTracks(this.API_LINK, this.KEY, username, timePeriod, artistLimit, page);

  public readonly getRecentTracks = (
    username: string,
    limit?: number,
    from?: string,
    to?: string,
    extended?: number,
    page?: number
  ) => getRecentTracks(this.API_LINK, this.KEY, username, limit, from, to, extended, page);

  public readonly getInfo = (username: string) => getInfo(this.API_LINK, this.KEY, username);

  constructor(API_KEY: string) {
    this.KEY = API_KEY;
    this.API_LINK = "http://ws.audioscrobbler.com/2.0";
  }
}
