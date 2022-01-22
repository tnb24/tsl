# TSL

Type-safe last.fm API wrapper

## NOTE: THIS IS STILL UNDER DEVELOPMENT

## Getting Started

```bash
# Yarn
yarn install tsl

# NPM
npm install tsl
```

## Example

```ts
import { Client } from "type-safe-lastfm";

const client = new Client(process.env.LASTFM_TOKEN)

/* username is mandatory, time limit and the limit of number of artists is optional */

(async () => {
  // get the top artists of an user
  console.log(
    await client.getTopArtists("KidnappingNemo", "7day", 5)
  ); 
  // get the top albums of an user
    console.log(
    await client.getTopAlbums("KidnappingNemo", "7day", 5)
  )
    // get the top songs of an user
    console.log(
    await client.getTopTracks("KidnappingNemo", "7day", 5)
  )
})();
```

## Why?

There were no good wrappers for the Last.fm API so I made my own :smile:
