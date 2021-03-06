import React, { useRef, useState } from 'react';
import {
  View,
  Animated,
  ImageBackground
} from 'react-native';

const H = 450

const ParallaxList = (props) => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const [screenHeight, setScreenHeight] = useState([]);

    const Item = (props) => {
        return (
            <View
                style={S.main}
                key={props.id}>
                <Animated.Text
                    style={S.text(scrollY, screenHeight)}>
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
            onContentSizeChange={(width, height) => { 
                setScreenHeight(height) 
            }}
        >
            {props.data.map((item) => (Item(item)))}
        </Animated.ScrollView>
    );
};

const S = {
    main: { 
        width: '100%',
        height: H,
        marginBottom: 7,
        alignItems: 'center',
    },

    darkView: {
        width: '100%',
        height: H,
        zIndex: 1,
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.6
    },

    image: {
        width: '100%',
        height: '100%'
    },

    text: (scrollY, screenHeight) => ({
        height: H,
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        zIndex: 100,
        position: 'absolute',
        marginVertical: 10,
        alignItems: 'center',
        transform: [{
            translateY: scrollY.interpolate({
                inputRange: [0, screenHeight + 100],
                outputRange: [0, (screenHeight / 10) + 5],
                extrapolate: 'clamp'
            })
        }]
    })
};

export default ParallaxList;