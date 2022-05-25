import { useEffect, useState } from 'react';
import { getCollectionDocs } from '@app/utils/firebase';

type Collection = {
  query: string;
  limit: number;
};

const useNFTCollectionInfo = (collectionName: string) => {
  const [collectionInfo, setCollectionInfo] = useState<Collection[]>();

  useEffect(() => {
    (async () => {
      const nftCollection = await getCollectionDocs(collectionName);
      const info: Collection[] = [];

      nftCollection.forEach(doc => {
        info.push({ query: doc.get('query'), limit: doc.get('limit') });
      });

      setCollectionInfo(info);
    })();
  }, [collectionName]);

  return collectionInfo;
};

export default useNFTCollectionInfo;
