import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Icons from '@expo/vector-icons';
import cn from 'react-native-classnames';
import { Colors, TextStyles } from '../../common';
import { ButtonProps } from './types';

export const IconButton = (props: ButtonProps) => {
    const { name, color, onPress, iconType, type = 'big' } = props;
    const containerStyles = cn(styles, type);
    const iconSize = type === 'big' ? 30 : 18;

    const IconProvider: any = Icons[iconType];
    return (
        <TouchableOpacity style={containerStyles} onPress={onPress}>
            <Text>
                <IconProvider name={name} size={iconSize} color={color} />
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 60,
        maxWidth: 60,
        minHeight: 60,
        minWidth: 60,
        textAlign: 'center',
        lineHeight: 60,
        borderWidth: 0.6,
        borderStyle: 'solid',
        borderColor: Colors.basicSecond,
        borderRadius: 30,
        backgroundColor: '',
    },
    small: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: 11,
        maxHeight: 28,
        maxWidth: 28,
        minHeight: 28,
        minWidth: 28,
        textAlign: 'baseline',
        lineHeight: 12,
        borderRadius: 14,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
    },
};
