import React, {FC, ReactNode} from 'react';
import {makeStyles} from '@rneui/themed';
import {View} from 'react-native';

type Props = {
  children: ReactNode;
};

const Background: FC<Props> = ({children}) => {
  const styles = useStyles();
  return <View style={styles.container}>{children}</View>;
};

export default Background;

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));
