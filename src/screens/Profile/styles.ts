import {theme} from '@/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.lightColors?.background,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    marginVertical: 5,
    fontSize: 20,
  },
  button: {
    marginVertical: 5,
  },
});
