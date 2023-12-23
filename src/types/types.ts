export interface getInfo {
    API_LINK: string,
    KEY: string, 
    username: string
}

export interface getTopAlbums {
  API_LINK: string,
  KEY: string,
  username: string,
  period?: string,
  limit?: number,
  page?: number
}

export interface getRecentTracks {
    API_LINK: string,
    KEY: string,
    username: string,
    limit?: number,
    from?: string,
    to?: string,
    extended?: number,
    page?: number
}

export interface getTopArtists {
    API_LINK: string,
    KEY: string,
    username: string,
    period?: string,
    limit?: number,
    page?: number
}

export interface getTopTracks {
    API_LINK: string,
    KEY: string,
    username: string,
    period?: string,
    limit?: number,
    page?: number
}