import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors, TextStyles } from '../../common';
import { CardButtonProps, AppIconTypes } from './types';
import * as DuckIcons from '../../svgComponents';

export default function CardButton(props: CardButtonProps) {
    const {
        backgroundColor = Colors.accent,
        onPress,
        type = AppIconTypes.Yellow,
        text = '',
    } = props;
    const Icon = DuckIcons[type];

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, { backgroundColor }]}
        >
            <Text style={styles.textStyles}>{text}</Text>
            <Icon />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 100,
        maxHeight: 160,
        borderRadius: 8,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    textStyles: { ...TextStyles.H6, color: Colors.white },
});
