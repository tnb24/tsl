# Khojo

:mag_right: Type-safe last.fm API wrapper

## NOTE: THIS IS STILL UNDER DEVELOPMENT

## Getting Started

```bash
# Yarn
yarn install khojo

# NPM
npm install khojo
```

## Example

```ts
import { Client } from "khojo";

const client = new Client(process.env.LASTFM_TOKEN);

(
  /* username is mandatory, time limit and the limit of number of artists is optional */

  async () => {
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
    /* username is mandatory, from and to are optional but recommended*/

    // get the recent tracks listening by a user between a specific period
    console.log(
        await client.getRecentTracks("KidnappingNemo", "1640975400", "1641493800")
    )
  }();
```

## Why?

There were no good wrappers for the Last.fm API so I made my own :smile:
