import React, { useState, useEffect, ReactChild } from 'react';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/integration/react';

type PersistorProviderProps = {
  children: ReactChild;
  loadingComponent?: React.ReactChild;
};

/**
 * This provider is used to read the stored redux
 * @returns
 */
const PersistorProvider: React.FC<PersistorProviderProps> = ({
  children,
  loadingComponent,
}) => {
  const [persistor, setPersistor] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPersistor(getPersistor());
  }, []);

  return (
    <>
      {persistor && (
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={() => setLoading(false)}>
          {loading ? (
            <>{loadingComponent || <p>Loading redux data...</p>}</>
          ) : (
            <>{children}</>
          )}
        </PersistGate>
      )}
    </>
  );
};

export default PersistorProvider;
