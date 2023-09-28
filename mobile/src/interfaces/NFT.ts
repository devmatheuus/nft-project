import { ImageSourcePropType } from 'react-native';

export interface BidsInterface {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  date: string;
}

export default interface NFTInterface {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: ImageSourcePropType;
  bids: BidsInterface[];
}
