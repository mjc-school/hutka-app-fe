import React from 'react';
import cn from 'react-native-classnames';
import { FontAwesome5 } from '@expo/vector-icons';

import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';
import { Colors, TextStyles } from '../../../common';
import { CommonCardStyles } from '..';
import { IconHead } from '../IconHead';

const button = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="bicycle" />
            <Text>Велосипед</Text>
        </TouchableOpacity>
    );
};

type InputCard = {
    caption: string;
    imageUri: string;
};

export default (props: InputCard) => {
    const { imageUri, caption } = props;

    return (
        <View style={CommonCardStyles.container}>
            <IconHead
                iconType="MaterialCommunityIcons"
                name="map-marker"
                color={Colors.accent}
            />
            <TextInput style={styles.textStyles}></TextInput>
            <View style={styles.buttonsContainer}>
                {button()}{button()}{button()}
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
        margin: 15,
        minWidth: '20%',
        maxHeight: 40,
        borderRadius: 8,
        textAlign: 'left',
        padding: 5,
        borderColor: Colors.greyLight,
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        maxHeight: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondaryButton,
    },
    textStyles: {
        ...TextStyles.H1,
        padding: 30,
    },
});
