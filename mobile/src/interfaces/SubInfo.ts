import { ImageSourcePropType } from 'react-native';

export interface ImageCmpInterface {
  imgUrl: ImageSourcePropType;
  index: number;
}

export interface NFTTitleInterface {
  title: string;
  subTitle: string;
  titleSize: number;
  subTitleSize: number;
}

export interface ETHPriceInterface {
  price: number;
}
