# TSL

Type-safe last.fm API wrapper

## NOTE: UNDER DEVELOPMENT. NEED TO ~~WRITE A CLIENT~~ AND MORE METHODS

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

const client = new Client(process.env.LASTFM_TOKEN)(async () => {
  // get the top artists of a user
  console.log(
    await client.getTopArtists("KidnappingNemo", "7day", 10)
  ); /* username is mandatory, time limit and the limit of number of artists is optional */
})();
```

## Why?

There were no good wrappers for the Last.fm API so I made my own :smile:
