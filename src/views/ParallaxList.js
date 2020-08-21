import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import Item from './Item';

const ParallaxList = (props) => {
    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={({ item }) => (Item(item))}>
            </FlatList>
        </View>
    );
};

export default ParallaxList;