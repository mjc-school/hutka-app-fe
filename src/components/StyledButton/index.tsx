import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import cn from 'react-native-classnames';
import { Colors, TextStyles } from '../../common';
import { ButtonProps } from './types';

export default function StyledButton(props: ButtonProps) {
    const { onPress, text, buttonStyle, textStyle, containerStyles, children } = props;
    const ownContainerStyles = { ...cn(styles, 'container', buttonStyle) };
    const textStyles = cn(styles, text, textStyle);

    return (
        <TouchableOpacity style={ownContainerStyles} onPress={onPress}>
            {children ? children :(<Text style={textStyles}>{text}</Text>)}
        </TouchableOpacity>
    );
}

const styles = {
    container: {
        minHeight: 44,
        minWidth: 343,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primary: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: Colors.border,
        borderWidth: 1,
    },
    secondary: {
        backgroundColor: Colors.secondaryButton,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.border,
    },
    transparent: {
        borderColor: Colors.secondaryButton,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
    },
    text: TextStyles.H6,
};
