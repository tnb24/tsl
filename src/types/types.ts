interface Image {
  size: string;
  "#text": string;
}

interface Artist {
  streamable: string;
  image: Image[];
  mbid: string;
  url: string;
  playcount: string;
  "@attr": {
    rank: string;
  };
  name: string;
}

interface TopArtistsAttr {
  user: string;
  totalPages: string;
  page: string;
  perPage: string;
  total: string;
}

export interface GetTopArtistsResponse {
  topartists: {
    artist: Artist[];
    "@attr": TopArtistsAttr;
  };
}
