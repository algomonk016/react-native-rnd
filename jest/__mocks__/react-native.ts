import 'react-native';

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.NativeModules.DevSettings = {
    setIsDebuggingRemotely: jest.fn(),
  };
  return RN;
});
