import { ReactChild } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ButtonProps = {
    text?: string;
    children?: React.ReactNode;
    buttonStyle: 'primary' | 'secondary' | 'transparent';
    textStyle?: StyleProp<TextStyle>;
    onPress?: (event) => void;
    containerStyles?: StyleProp<ViewStyle>;
    children?: ReactChild| ReactChild[];
};
