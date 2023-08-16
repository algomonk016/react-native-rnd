// Mock useNavigation with the module factory
const mockNavigation = {
  addListener: jest.fn(),
  canGoBack: jest.fn(),
  dispatch: jest.fn(),
  getId: jest.fn(),
  getParent: jest.fn(),
  getState: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(),
  jumpTo: jest.fn(),
  navigate: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  push: jest.fn(),
  removeListener: jest.fn(),
  replace: jest.fn(),
  reset: jest.fn(),
  setOptions: jest.fn(),
  setParams: jest.fn(),
};

export const useNavigation = jest.fn();

/**
 * initially the useNavigation will not have the properties of a navigator
 * that'll cause error
 * to fix this, added the required properties manually
 * */ 
useNavigation.mockReturnValue(mockNavigation);
