import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import { COLORS, NFTData, NFTFData } from '../../constants';

import { NFTCard, FocusedStatusBar, HomeHeader } from '../components';

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={NFTData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <NFTCard data={item}/> }
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -1,
                }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ height: 300, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;