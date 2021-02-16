import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

import { Colors, TextStyles } from '../../../common';
import { IconHead } from '../IconHead';
import { CommonCardStyles } from '..';

const button = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>
                <FontAwesome5 name="bicycle" />
                <Text> Велосипед</Text>
            </Text>
        </TouchableOpacity>
    );
};

export type ImageCardProps = {
    caption: string;
    choises?: string;
};

export default (props: ImageCardProps) => {
    const { caption } = props;

    return (
        <View style={CommonCardStyles.container}>
            <IconHead
                iconType="FontAwesome5"
                name="car-side"
                color={Colors.accent}
            />

            <Text style={styles.textStyles}>Как планируешь передвигаться?</Text>
            <View style={styles.buttonsContainer}>
                {button()}
                {button()}
                {button()}
                {button()}
                {button()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        flex: 0,
        margin: 5,
        minWidth: '23%',
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
    textContainer: {
        flex: 1,
        maxHeight: '30%',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondaryButton,
    },
    textStyles: {
        ...TextStyles.H1,
        padding: 30,
    },
});
