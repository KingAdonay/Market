import React from 'react';
import { View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import {COLORS, NFTData, SIZES, SHADOWS, assets, FONTS} from '../../constants';

import {CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDescription, DetailsBid } from '../components';

const DetailsHeader = ({data, navigation})=>(
  <View style={{ width: '100%', height: 373}}>
    <Image 
      source={data.image}
      resizeMode='cover'
      style={{ width: '100%', height: '100%'}}
    />
  </View>
)

const Details = ({route, navigation}) => {
  const data = route.params.data;
  console.log(data);
    return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
      <FocusedStatusBar barStyle='dark-content' backgroundColor='transparent' transLucent={true}/>
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.large,
        justifyContent:'center',
        backgroundColor:'rgba(255,255,255,0.5)',
        alignItems: 'center',
        zIndex: 1
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
      </View>
      <FlatList
        data={data.bids}
        renderItem={({item})=><DetailsBid/>}
        keyExtractor={(item, index)=>index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge}}
        ListHeaderComponent={()=>(
          <>
            <DetailsHeader data={data} navigation={navigation}/>
          </>
    )}
      />
    </SafeAreaView>
  )
}

export default Details;