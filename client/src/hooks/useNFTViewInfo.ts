import { useCallback, useEffect, useState } from 'react';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@app/utils/firebase';

const useNFTViewInfo = (imageId?: string) => {
  const [views, setViews] = useState(0);
  const imageRef = imageId ? doc(db, 'art', imageId) : null;

  const getDocument = useCallback(async () => {
    if (imageRef) {
      const imageSnap = await getDoc(imageRef);
      return imageSnap;
    }
  }, [imageRef]);

  const getViewCount = useCallback(async (): Promise<number> => {
    const imageDoc = await getDocument();
    if (imageDoc?.exists()) {
      return imageDoc.get('views');
    }
    return 0;
  }, [getDocument]);

  const notifyNewView = useCallback(async () => {
    if (imageRef) {
      const imageDoc = await getDocument();
      if (imageDoc?.exists()) {
        // update
        const currentView = imageDoc.get('views');
        await updateDoc(imageRef, { views: currentView + 1 });
        setViews(currentView + 1);
      } else {
        // create
        await setDoc(imageRef, { views: 1 }, { merge: true });
      }
    }
  }, [getDocument, imageRef]);

  useEffect(() => {
    (async () => {
      const currentViews = await getViewCount();
      setViews(currentViews);
    })();
  }, [getViewCount]);

  return {
    getViewCount,
    notifyNewView,
    views,
  };
};

export default useNFTViewInfo;
