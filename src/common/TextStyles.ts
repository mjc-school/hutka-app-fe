import {StyleProp, StyleSheet, TextStyle, Platform} from 'react-native';

const font = Platform.select({web: 'Sans Sherif'})

const Large: StyleProp<TextStyle> = {
    // fontFamily: font,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    letterSpacing: 0.37
};

const H6: StyleProp<TextStyle> = {
    // fontFamily: font,
    fontStyle: "normal",
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: 0.3
};

export default {Large, H6}