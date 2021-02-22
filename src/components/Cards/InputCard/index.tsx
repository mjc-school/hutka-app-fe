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
import { ToggleButton } from '../ToggleButton';

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        flexBasis: 'auto',
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
        width: '60%',
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

const items = [
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

type InputCardProps = {
    caption: string;
    updateResult: (value: string) => void;
};

export default function InputCard(props: InputCardProps) {
    const { caption, updateResult } = props;
    const [inputText, setInputText] = React.useState('');
    const [selected, setSelected] = React.useState(null);

    const isItemSelected = React.useCallback(
        (city: string) => (selected ? city === selected : false),
        [selected],
    );

    const onChangeText = React.useCallback(
        (value: string) => {
            const mathcing = items.find(option => option === value) || null;
            updateResult(mathcing);
            setSelected(mathcing);
            setInputText(value);
        },
        [updateResult],
    );

    const onItemPress = React.useCallback(
        (item: string) => {
            const newValue = selected === item ? null : item;
            setSelected(newValue);
            updateResult(newValue);
            setInputText(newValue ? newValue : '');
        },
        [selected, updateResult],
    );

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
                    value={inputText}
                    onChangeText={onChangeText}
                    placeholderTextColor={Colors.greyLight}
                    placeholder="Начни вводить место"
                ></TextInput>
                <TouchableOpacity style={styles.mapButton}>
                    <Text style={{ color: Colors.secondary }}>Карта</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                {items.map(item => (
                    <ToggleButton
                        key={item}
                        label={item}
                        isSelected={isItemSelected(item)}
                        onPress={() => onItemPress(item)}
                    />
                ))}
            </View>
        </View>
    );
}
