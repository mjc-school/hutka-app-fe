import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import cn from 'react-native-classnames';
import { Colors, TextStyles, IconProps } from '../../../common';
import { ButtonProps } from './types';

interface IconButtonSmallProps extends IconProps {
    onPress: () => void;
    containerStyle: ViewStyle;
}

export const IconButtonSmall = (props: IconButtonSmallProps) => {
    const {
        iconName,
        iconColor,
        onPress,
        iconType,
        iconSize = 12,
        iconStyle,
        containerStyle,
    } = props;

    // const IconProvider: any = Icons[iconType];
    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            onPress={onPress}
        >
            <Ionicons
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={iconStyle}
            />
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 32,
        minWidth: 32,
        textAlign: 'center',
        lineHeight: 12,
        borderColor: Colors.basicSecond,
        borderRadius: 16,
        backgroundColor: 'rgba(0,0,0,0.65)',
    },
};
