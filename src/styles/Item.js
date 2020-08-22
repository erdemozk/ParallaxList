import React from 'react';
import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
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

    text: {
        height: 440,
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        zIndex: 100,
        position: 'absolute',
        marginVertical: 10,
        alignItems: 'center',
    }
});