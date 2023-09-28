import { Text, TouchableOpacity, Image } from 'react-native';
import { CircleButtonInterface } from '../interfaces';
import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';
import { RectangularButtonInterface } from '../interfaces/Button';

export const CircleButton = ({
  imgUrl,
  handlePress,
  ...rest
}: CircleButtonInterface) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...rest,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectangularButton = ({
  fontSize,
  minWidth,
  handlePress,
  ...rest
}: RectangularButtonInterface) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth,
        padding: SIZES.small,
        ...rest,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
