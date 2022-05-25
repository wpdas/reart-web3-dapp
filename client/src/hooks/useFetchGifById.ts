/* eslint-disable no-console */
import { useEffect, useState } from 'react';

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useFetchGifById = (id?: string) => {
  const [gifUrl, setGifUrl] = useState('');
  const [creator, setCreator] = useState('');
  const [datetime, setDatetime] = useState<Date>();

  useEffect(() => {
    const fetchGif = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/${id}?api_key=${GIPHY_API_KEY}`,
        );

        const { data } = await response.json();
        setGifUrl(data?.images?.downsized_medium?.url);
        setCreator(data?.username);
        setDatetime(new Date(data?.import_datetime));
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchGif();
    }
  }, [id]);

  return {
    gifUrl,
    creator,
    datetime,
  };
};

export default useFetchGifById;
