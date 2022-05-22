import { createModel } from '@rematch/core';
import { RootModel } from './models';

interface LoginRequestPayload {
  email: string;
  firstName: string;
}

interface UserState {
  email: string;
}

const initialState: UserState = {
  email: '',
};

export const user = createModel<RootModel>()({
  // Initial state
  state: initialState,

  // Reducers
  reducers: {
    RESET() {
      return initialState;
    },
  },

  // Effects (can be sync or async) [the ones you will use over the app]
  effects: dispatch => ({
    reset() {
      dispatch.user.RESET();
    },
  }),
});
