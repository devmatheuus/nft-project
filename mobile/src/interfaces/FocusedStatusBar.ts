import { StatusBarProps } from 'react-native';

export default interface FocusedStatusBarInterface extends StatusBarProps {
  backgroundColor: string;
  barStyle?: 'dark-content' | 'light-content' | 'default';
}
