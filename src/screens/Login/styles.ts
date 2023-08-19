import {theme} from '@/theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.lightColors?.background,
    justifyContent: 'space-around',
  },
  headerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    padding: 10,
  },
  loginContainer: {
    justifyContent: 'center',
  },
  loginText: {
    color: theme.darkColors?.grey1,
    fontSize: 24,
  },
  input: {
    fontSize: 20,
    marginVertical: 10,
    padding: 10,
    width: width - 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: theme.darkColors?.greyOutline,
    color: theme.darkColors?.grey1,
  },
});
