import { useEffect, useState } from 'react';
import dummyData from '@app/utils/dummyData';

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useFetchGif = (keyword?: string) => {
  const [gifUrl, setGifUrl] = useState('');

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${keyword}&limit=1`,
        );

        const { data } = await response.json();
        setGifUrl(data[0]?.images?.downsized_medium?.url);
      } catch (error) {
        // Use a default image url in case of error
        setGifUrl(dummyData[0].url);
      }
    };

    if (keyword) {
      fetchGifs();
    }
  }, [keyword]);

  return gifUrl;
};

export default useFetchGif;
