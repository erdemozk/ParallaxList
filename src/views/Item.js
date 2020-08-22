import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView
} from 'react-native';

import { styles as S } from '../styles/Item';

const Item = (item) => {
    return (
        <View
            style={S.main}>
            <Text
                style={S.text}>
                {item.genre}
            </Text>
            <View style={S.darkView}/>
            <ImageBackground
                source={{uri: item.image}}
                style={S.image}/>
        </View>
    );
};

export default Item;