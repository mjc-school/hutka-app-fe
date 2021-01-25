import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
    ImageResizeMode,
    View,
} from 'react-native';
import { Colors, TextStyles } from '../../common';
import { RouteImageProps } from './types';
import { IconButton } from '../IconButton';

export default function RouteImage(props: RouteImageProps) {
    const { caption, imageUri, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <ImageBackground
                resizeMode={'cover'}
                style={styles.imageStyles}
                imageStyle={styles.imageContainer}
                source={{ uri: imageUri }}
            />

            <Text style={styles.textStyles}>{caption}</Text>
            <View style={styles.buttonContainer}>
                <IconButton
                    color="#000000"
                    name="heart-outline"
                    iconType="MaterialCommunityIcons"
                    type="small"
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 220,
        maxHeight: 160,
        minWidth: 220,
        minHeight: 160,
        borderRadius: 8,
        elevation: 5,
    },
    imageContainer: {
        borderRadius: 8,
    },
    textContainer: {},
    imageStyles: {
        minWidth: 220,
        minHeight: 160,
        borderRadius: 8,
    },
    textStyles: {
        ...TextStyles.H6,
        zIndex: 1000,
        color: Colors.accent,
        // zIndex: 1000,
        bottom: '50%',
        position: 'relative',
    },
    buttonContainer: {
        zIndex: 1000,
        right: '8%',
        top: '8%',
        position: 'absolute',
    },
});
