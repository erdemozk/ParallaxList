import React, { useRef } from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Animated
} from 'react-native';
import Item from './Item';

//x.nativeEvent.contentOffset.y

const ParallaxList = (props) => {
    const scrollA = useRef(new Animated.Value(0)).current;
    return (
        <View>
            <FlatList
                data={props.data}
                extraData={props.data}
                renderItem={({ item }) => (Item(item))}
                renderScrollComponent={(props) => <ScrollView {...props} onScroll={(x) => {
                    Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollA}}}],
                        {useNativeDriver: true}
                    )
                }}/>}>
            </FlatList>
        </View>
    );
};

export default ParallaxList;