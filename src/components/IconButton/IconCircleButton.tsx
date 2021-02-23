import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Icons from '@expo/vector-icons';
import cn from 'react-native-classnames';
import { Colors, TextStyles } from '../../common';
import { ButtonProps } from './types';

const BUTTON_SIZE = 60;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: BUTTON_SIZE,
        maxWidth: BUTTON_SIZE,
        minHeight: BUTTON_SIZE,
        minWidth: BUTTON_SIZE,
        textAlign: 'center',
        lineHeight: BUTTON_SIZE,
        borderRadius: BUTTON_SIZE / 2,
        backgroundColor: '#fff',
        // shadow
        // shadow
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
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

export const IconCircleButton = (props: ButtonProps) => {
    const { name, color, onPress, iconType, type = 'big' } = props;
    const containerStyles = cn(styles, type);
    const iconSize = type === 'big' ? 30 : 18;

    const IconProvider: any = Icons[iconType];
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text>
                <IconProvider name={name} size={iconSize} color={color} />
            </Text>
        </TouchableOpacity>
    );
};
