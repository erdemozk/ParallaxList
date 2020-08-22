import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView
} from 'react-native';

import { styles as S } from '../styles/Item';

const Item = (props) => {
    return (
        <View
            style={S.main}>
            <Text
                style={S.text}>
                {props.genre}
            </Text>
            <View style={S.darkView}/>
            <ImageBackground
                source={{uri: props.image}}
                style={S.image}/>
        </View>
    );
};

export default Item;