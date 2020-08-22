import React, { useRef } from 'react';
import {
  View,
  ScrollView,
  Animated,
  Text,
  ImageBackground
} from 'react-native';

const H = 440
//x.nativeEvent.contentOffset.y

{/**/}

const ParallaxList = (props) => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const Item = (props) => {
        return (
            <View
                style={S.main}>
                <Animated.Text
                    style={S.text(scrollY)}>
                    {props.genre}
                </Animated.Text>
                <View style={S.darkView}/>
                <ImageBackground
                    source={{uri: props.image}}
                    style={S.image}/>
            </View>
        );
    };

    return (
        <Animated.ScrollView
        onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true}
        )}
        scrollEventThrottle={16}
        >
            {/*<FlatList
                data={props.data}
                extraData={props.data}
                renderItem={({ item }) => (Item(item))}
                renderScrollComponent={(props) => <ScrollView {...props} onScroll={(x) => {
                    Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollA}}}],
                        {useNativeDriver: true}
                    )
                }}/>}>
            </FlatList>*/}
            {props.data.map((item) => (Item(item)))}
        </Animated.ScrollView>
    );
};

const S = {
    main: { 
        width: '100%',
        height: 440,
        marginBottom: 7,
        alignItems: 'center',
    },

    darkView: {
        width: '100%',
        height: 440,
        zIndex: 1,
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.6
    },

    image: {
        width: '100%',
        height: '100%'
    },

    text: scrollY => ({
        height: 440,
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        zIndex: 100,
        position: 'absolute',
        marginVertical: 10,
        alignItems: 'center',
        transform: [{
            translateY: scrollY.interpolate({
                inputRange: [0, 3652, 3755],
                outputRange: [0, 365, 375]
            })
        }]
    })
};

export default ParallaxList;