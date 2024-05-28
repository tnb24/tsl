# Khojo

[![Publish Package To NPM](https://github.com/tnb24/khojo/actions/workflows/publish.yml/badge.svg)](https://github.com/tnb24/khojo/actions/workflows/publish.yml)

:mag_right: Type-safe last.fm API wrapper

## Getting Started

```bash
# Yarn
yarn add khojo

# NPM
npm install khojo
```

## Example

```ts
import { Client } from "khojo";
const client = new Client(process.env.LASTFM_TOKEN);

/* username is mandatory, time limit and the limit of number of artists is optional */
// get the top artists of an user
console.log(await client.getTopArtists("KidnappingNemo", "7day", 5));
// get the top albums of an user
console.log(await client.getTopAlbums("KidnappingNemo", "7day", 5));
// get the top songs of an user
console.log(await client.getTopTracks("KidnappingNemo", "7day", 5));

/* username is mandatory, limit is optional but recommended*/
// get the recent tracks listening by a user
console.dir(await client.getRecentTracks("KidnappingNemo", 1));
// get the info available for a user
console.log(await client.getInfo("KidnappingNemo"));
```

## Why?

There were no good wrappers for the Last.fm API so I made my own.

:stop_sign: This library is still under active development. Expect bugs and feel free to open pull requests to fix them 🤝
