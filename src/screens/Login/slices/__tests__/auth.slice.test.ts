import {TAuthState, setToken, clearToken} from '../auth.slice';
import authReducer from '@/screens/Login/slices/auth.slice';

const userDetails: TAuthState = {
  username: 'shivesh',
  id: 2,
  token: 'temp-token',
  isAuthenticated: true,
};

const InitialState: TAuthState = {
  username: null,
  id: null,
  token: null,
  isAuthenticated: false,
};

const authPayload = {
  data: userDetails,
};

describe('authSlice', () => {
  it('should updated user details', () => {
    const nextState = authReducer(InitialState, setToken(authPayload));

    expect(nextState).toStrictEqual(userDetails);
  });

  it('should clear the user states', () => {
    const nextState = authReducer(userDetails, clearToken());
    expect(nextState).toStrictEqual(InitialState);
  });
});
