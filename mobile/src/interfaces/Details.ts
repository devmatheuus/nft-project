import { NavigationProp, RouteProp } from '@react-navigation/native';
import RootStackParamList from './Navigation';
import NFTInterface from './NFT';

export interface DetailsHeaderInterface {
  data: NFTInterface;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}

export interface DetailsInterface {
  route: RouteProp<RootStackParamList, 'Details'>;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}
