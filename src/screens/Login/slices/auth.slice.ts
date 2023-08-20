import {createSlice} from '@reduxjs/toolkit';

export type TAuthState = {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
  id: number | null;
};

const initialState: TAuthState = {
  isAuthenticated: false,
  token: null,
  username: null,
  id: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, {payload}) => {
      try {
        const {token, username, id} = payload.data;
        state.token = token;
        state.isAuthenticated = true;
        state.username = username;
        state.id = id;
      } catch (error) {
        console.log('message', error);
      }
    },
    clearToken: state => {
      state.token = null;
      state.isAuthenticated = false;
      state.username = null;
      state.id = null;
    },
  },
});

export const {setToken, clearToken} = authSlice.actions;
export default authSlice.reducer;
