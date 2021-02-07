import { StyleProp, StyleSheet, TextStyle, Platform } from 'react-native';
import Colors from './Colors';

const font = Platform.select({ web: 'Sans Sherif' });

export const Large: StyleProp<TextStyle> = {
    // fontFamily: font,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    letterSpacing: 0.37,
    color: Colors.basic,
};
export const H1: StyleProp<TextStyle> = {
    height: '28',
    width: '100',
    // fontFamily: font,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
    letterSpacing: 0.34,
    color: Colors.basic,
};

export const H2: StyleProp<TextStyle> = {
    // fontFamily: font,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 19,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: 0.34,
    color: Colors.basic,
};

export const H6: StyleProp<TextStyle> = {
    // fontFamily: font,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: 0.3,
    color: Colors.basic,
};

export const H7: StyleProp<TextStyle> = {
    // fontFamily: font,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: Colors.basic,
};

export const Body1: StyleProp<TextStyle> = {
    // fontFamily: font,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: Colors.basic,
};

export const Body2: StyleProp<TextStyle> = {
    // fontFamily: font,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: Colors.basic,
};

export const Body4: StyleProp<TextStyle> = {
    // fontFamily: font,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: Colors.basic,
};

export const Body5: StyleProp<TextStyle> = {
    // fontFamily: font,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: Colors.basic,
};

export default { Large, H6, H1, H2, H7, Body2, Body4 };
