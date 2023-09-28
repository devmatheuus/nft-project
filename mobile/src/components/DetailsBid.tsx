import { View, Text, Image } from 'react-native';
import { BidsInterface } from '../interfaces';
import { ETHPrice } from './SubInfo';
import { COLORS, FONTS, SIZES } from '../constants';

const DetailsBid = (data: BidsInterface) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={data.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {data.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {data.date}
        </Text>
      </View>
      <ETHPrice price={data.price} />
    </View>
  );
};

export default DetailsBid;
