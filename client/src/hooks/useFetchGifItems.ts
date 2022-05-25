/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export type GifData = {
  id: string;
  title: string;
  description: string;
  importDatetime: Date;
  url?: string;
};

type Options = {
  query: string;
  limit?: number;
};

type FetchOptions = Options[];

/**
 * Fetch Gifs
 * You can make more than one query
 */
const useFetchGifItems = (
  fetchOptions?: FetchOptions,
  removeStringFromDescription?: string,
) => {
  const [gifsData, setGifsData] = useState<GifData[]>();

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const listOfPromisses: any[] = [];
        fetchOptions!.forEach(fetchOption => {
          listOfPromisses.push(
            fetch(
              `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${
                fetchOption.query
              }&limit=${fetchOption.limit || 16}`,
            )
              .then(response => {
                return response.json();
              })
              .then(data => {
                return data;
              }),
          );
        });

        const values = await Promise.all(listOfPromisses);
        let joinedData = { data: [] };

        values.forEach(responseData => {
          joinedData = {
            data: [...(joinedData.data as []), ...(responseData.data as [])],
          };
        });

        const structuredData: GifData[] = joinedData.data.map(
          (gifData: any) => {
            return {
              id: gifData.id,
              title: gifData.user?.display_name,
              description: removeStringFromDescription
                ? gifData.title.replace(removeStringFromDescription, '')
                : gifData.title,
              importDatetime: new Date(gifData.import_datetime),
              url: gifData.images?.downsized_medium?.url,
            } as GifData;
          },
        );

        const filteredData = structuredData.filter(gifData => !!gifData.url);

        setGifsData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    if (fetchOptions) {
      fetchGifs();
    }
  }, [fetchOptions?.length]);

  return gifsData;
};

export default useFetchGifItems;
