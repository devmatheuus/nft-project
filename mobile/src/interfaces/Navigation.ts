import NFTInterface from './NFT';

type HomeScreenParams = {};
type DetailsScreenParams = { data: NFTInterface };

type RootStackParamList = {
  Home: HomeScreenParams;
  Details: DetailsScreenParams;
};

export default RootStackParamList;
