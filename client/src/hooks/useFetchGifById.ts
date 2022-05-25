/* eslint-disable no-console */
import { useEffect, useState } from 'react';

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useFetchGifById = (id?: string) => {
  const [gifUrl, setGifUrl] = useState('');
  const [creator, setCreator] = useState('');
  const [datetime, setDatetime] = useState<Date>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hasError, setHasError] = useState(false);
  const [status, setStatus] = useState<'pending' | 'ready'>('pending');

  useEffect(() => {
    const fetchGif = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/${id}?api_key=${GIPHY_API_KEY}`,
        );

        const { data } = await response.json();

        if (data?.images) {
          setGifUrl(data?.images?.downsized_medium?.url);
          setCreator(data?.username);
          setDatetime(new Date(data?.import_datetime));
          setTitle(data?.user?.display_name);
          setDescription(data?.title);
          setStatus('ready');
        } else {
          setHasError(true);
          setStatus('ready');
        }
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
    title,
    description,
    hasError,
    status,
  };
};

export default useFetchGifById;
