import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

import { Colors, TextStyles } from '../../../common';
import { IconHead } from '../IconHead';
import { CommonCardStyles } from '..';

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        // flex: 0,
        margin: 5,
        // minWidth: '23%',
        // maxWidth: '30%',
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

interface TransportButtonProps {
    isSelected: boolean;
    label: string;
}
const TransportButton = (props: TransportButtonProps) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text numberOfLines={1}>
                <Text>{props.label}</Text>
            </Text>
        </TouchableOpacity>
    );
};

export type ImageCardProps = {
    caption: string;
    choises?: string;
};

interface TransportCardDefinition {
    id: string;
    emoji: string;
    label: string;
}
const TransportCardDefinitions: readonly TransportCardDefinition[] = [
    { id: 'car', label: 'Авто', emoji: '🚘' },
    { id: 'bike', label: 'Вело', emoji: '🚲' },
    { id: 'train', label: 'Поезд', emoji: '🚆' },
    { id: 'bus', label: 'Автобус', emoji: '🚌' },
    { id: 'walk', label: 'Я гуляю', emoji: '💃' },
];

export default function IconCard(props: ImageCardProps) {
    const { caption } = props;
    const [selectedTransportDefs] = React.useState([]);

    const isTransportSelected = React.useCallback(
        (def: TransportCardDefinition) =>
            selectedTransportDefs.find(selectedDef => selectedDef === def),
        [selectedTransportDefs],
    );

    return (
        <View style={CommonCardStyles.container}>
            <IconHead
                iconType="FontAwesome5"
                name="car-side"
                color={Colors.accent}
            />

            <Text style={styles.textStyles}>Как планируешь передвигаться?</Text>
            <View style={{ flex: 0, flexBasis: 'auto' }}>
                <View style={styles.buttonsContainer}>
                    {TransportCardDefinitions.map(t => (
                        <TransportButton
                            key={t.id}
                            label={`${t.emoji} ${t.label}`}
                            isSelected={isTransportSelected(t)}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
}
