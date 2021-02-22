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

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        flexBasis: 'auto',
    },
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
    },
    searchControls: {
        flex: 0,
        flexBasis: 'auto',
        flexDirection: 'row',
        padding: 8,
        marginBottom: 5,
        backgroundColor: '#E5E5E5',
        borderRadius: 8,
    },
    searchControl: {
        padding: 8,
        fontSize: 16,
    },
    mapButton: {
        padding: 8,
        paddingRight: 4,
        borderLeftColor: Colors.greyLight,
        borderLeftWidth: 0.5,
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

const cities = [
    'Минск',
    'Могилев',
    'Гомель',
    'Брест',
    'Гродно',
    'Витебск',
    'Молодечно',
    'Орша',
    'Барановичи',
];

const CityButton = ({ city }: { city: string }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>{city}</Text>
        </TouchableOpacity>
    );
};

type InputCardProps = {
    caption: string;
    updateResult: (value: string) => void;
};

export default function InputCard(props: InputCardProps) {
    const { caption, updateResult } = props;

    return (
        <View style={CommonCardStyles.container}>
            <IconHead
                iconType="MaterialCommunityIcons"
                name="map-marker"
                color={Colors.accent}
            />
            <Text style={styles.textStyles}>{caption}</Text>
            <View style={styles.searchControls}>
                <TextInput
                    style={styles.searchControl}
                    onChangeText={updateResult}
                    placeholderTextColor={Colors.greyLight}
                    placeholder="Начни вводить место"
                ></TextInput>
                <TouchableOpacity style={styles.mapButton}>
                    <Text style={{ color: Colors.secondary }}>Карта</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                {cities.map((city, i) => (
                    <CityButton key={i} city={city} />
                ))}
            </View>
        </View>
    );
}
