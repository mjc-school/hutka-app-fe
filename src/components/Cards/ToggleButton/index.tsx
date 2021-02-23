import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { Colors } from '../../../common';

const styles = StyleSheet.create({
    button: {
        margin: 5,
        maxHeight: 40,
        borderRadius: 8,
        textAlign: 'left',
        padding: 10,
        borderColor: Colors.greyLight,
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: Colors.accent,
        color: Colors.white,
    },
});

interface ToggleButtonProps {
    isSelected: boolean;
    label: string;
    onPress?: () => void;
}
export const ToggleButton = (props: ToggleButtonProps) => {
    const { label, isSelected, onPress } = props;
    const { button, selected } = styles;
    const buttonStyles = isSelected
        ? StyleSheet.flatten([button, selected])
        : button;
    const textSyles = { color: isSelected ? Colors.white : Colors.basic };
    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={textSyles} numberOfLines={1}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};
