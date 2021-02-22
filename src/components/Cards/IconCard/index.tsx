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
    selected: {
        backgroundColor: Colors.accent,
        color: Colors.white,
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
    onPress?: () => void;
}
const TransportButton = (props: TransportButtonProps) => {
    const { label, isSelected, onPress } = props;
    const { button, selected } = styles;
    const buttonStyles = isSelected
        ? StyleSheet.flatten([button, selected])
        : button;
    const textSyles = { color: isSelected ? Colors.white : Colors.basic };
    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={textSyles} numberOfLines={1}>
                <Text>{label}</Text>
            </Text>
        </TouchableOpacity>
    );
};

export type IconCardProps = {
    caption: string;
    result: string[];
    updateResult: (value: string[]) => void;
    options?: string;
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

export default function IconCard(props: IconCardProps) {
    const { caption, updateResult } = props;
    const [selectedTransportDefs, setselectedTransportDefs] = React.useState(
        new Set<TransportCardDefinition>(),
    );

    const isTransportSelected = React.useCallback(
        (def: TransportCardDefinition) => selectedTransportDefs.has(def),
        [selectedTransportDefs],
    );

    const onTransportButtonCLick = React.useCallback(
        (def: TransportCardDefinition) => {
            const newSet = new Set<TransportCardDefinition>(
                selectedTransportDefs,
            );

            if (newSet.has(def)) {
                newSet.delete(def);
            } else {
                newSet.add(def);
            }
            updateResult([...newSet].map(d => d.id));
            setselectedTransportDefs(newSet);
        },
        [selectedTransportDefs, updateResult],
    );

    return (
        <View style={CommonCardStyles.container}>
            <IconHead
                iconType="FontAwesome5"
                name="car-side"
                color={Colors.accent}
            />

            <Text style={styles.textStyles}>{caption}</Text>
            <View style={{ flex: 0, flexBasis: 'auto' }}>
                <View style={styles.buttonsContainer}>
                    {TransportCardDefinitions.map(t => (
                        <TransportButton
                            key={t.id}
                            label={`${t.emoji} ${t.label}`}
                            isSelected={isTransportSelected(t)}
                            onPress={() => onTransportButtonCLick(t)}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
}
