import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, TextStyles } from '../../../common';
import { IconHead } from '../IconHead';
import { CommonCardStyles } from '..';
import { ToggleButton } from '../ToggleButton';

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
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
                        <ToggleButton
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
