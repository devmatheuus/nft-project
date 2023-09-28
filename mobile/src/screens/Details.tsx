import {
  Text,
  SafeAreaView,
  View,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';

import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants';
import {
  CircleButton,
  RectangularButton,
  SubInfo,
  FocusedStatusBar,
  DetailsBid,
  DetailsDesc,
} from '../components';
import { DetailsHeaderInterface, DetailsInterface } from '../interfaces';
import React from 'react';

const DetailsHeader = ({ data, navigation }: DetailsHeaderInterface) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: '100%', height: '100%' }}
    />

    <CircleButton
      imgUrl={assets.left}
      title="Back"
      handlePress={() => navigation.goBack()}
      top={StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10}
      left={15}
    />

    <CircleButton
      imgUrl={assets.heart}
      title="Heart"
      right={15}
      top={StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10}
    />
  </View>
);

export const Details = ({ route, navigation }: DetailsInterface) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1,
        }}
      >
        <RectangularButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          handlePress={() => {}}
        />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc {...data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};
