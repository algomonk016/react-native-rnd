export type Props = {
  isLoggedIn: boolean;
};

export type AuthStackParam = {
  Login: undefined;
  Signup: undefined;
};

export type RootStackParam = {
  Home: undefined;
  Notifications: {name: string};
  Profile: undefined; // TODO: just to prevent the error: [wanted to navigate to profile from HomeStack, throwing error(eslint) that profile is not present in RootStackParam]
};

export type BottomNavigatorParam = {
  HomeStack: undefined;
  Profile: undefined;
};
