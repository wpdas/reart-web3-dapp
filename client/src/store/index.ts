import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import persistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';
import { models, RootModel } from './models';

type FullModel = ExtraModelsFromLoading<RootModel, { type: 'full' }>;

export const store = init<RootModel, FullModel>({
  models,
  plugins: [
    immerPlugin(),
    loadingPlugin({ type: 'full' }),
    persistPlugin({
      key: 'root',
      storage,
    }),
  ],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
