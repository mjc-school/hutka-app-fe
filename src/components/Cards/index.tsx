import React from 'react';
import cn from 'react-native-classnames';

import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

import { CommonCardStyles } from '.';

export default function (props: any) {
    const { children } = props;

    return <View style={CommonCardStyles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: '35%',
    },
    imageStyles: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        opacity: 0.85,
    },
    textContainer: {
        flex: 1,
        width: '100%',
        maxHeight: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondaryButton,
        borderBottomStartRadius: 16,
        borderBottomEndRadius: 16,
    },
    textStyles: TextStyles.H1,
});
