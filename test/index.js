import { getTopArtists } from '../dist/index';

(async () => {
  try {
    const topArtists = await getTopArtists('KidnappingNemo', '7day', 5); 
    console.log(topArtists);
  } catch (error) {
    console.error('Error fetching top artists:', error);
  }
})();
