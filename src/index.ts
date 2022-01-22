import { getTopArtists } from "./queries/getTopArtists";

export { getTopArtists };

export class Client {
  readonly KEY: string;
  API_LINK: string;
  public readonly getTopArtists = (username: string, timePeriod?: string, artistLimit?: number) =>
    getTopArtists(this.API_LINK, this.KEY, username, timePeriod, artistLimit);
  constructor(API_KEY: string) {
    (this.KEY = API_KEY), (this.API_LINK = "http://ws.audioscrobbler.com/2.0");
  }
}
