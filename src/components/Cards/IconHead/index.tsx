import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import * as Icons from '@expo/vector-icons';
import cn from 'react-native-classnames';
import { Colors, TextStyles } from '../../../common';

type IconHead = {
    name: string;
    color: string;
    iconType: string;
};

export const IconHead = (props: IconHead) => {
    const { name, color, iconType } = props;
    const IconProvider: any = Icons[iconType];
    console.log(IconProvider);
    return (
        <View style={styles.container}>
            <Text>
                <IconProvider name={name} size={30} color={color} />
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100,
        minWidth: 100,
        maxHeight: 100,
        maxWidth: 100,
        textAlign: 'center',
        lineHeight: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(47, 128, 237, 0.1)',
    },
});
