import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import { FocusedStatusBarInterface } from '../interfaces';

const FocusedStatusBar = (props: FocusedStatusBarInterface) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
