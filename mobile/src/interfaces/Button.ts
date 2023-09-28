import { ButtonProps, ImageSourcePropType } from 'react-native';

export interface CircleButtonInterface extends ButtonProps {
  imgUrl: ImageSourcePropType;
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  handlePress?: () => void;
}

export interface RectangularButtonInterface {
  minWidth: number;
  fontSize: number;
  handlePress: () => void;
}
