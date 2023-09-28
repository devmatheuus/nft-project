import { useState } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components';
import { COLORS, NFTData } from '../constants';
import { NFTInterface } from '../interfaces';

export const Home = () => {
  const [nftData, setNftData] = useState<NFTInterface[]>(NFTData);

  const handleSearch = (value: string) => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      return setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard {...item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onChange={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};
