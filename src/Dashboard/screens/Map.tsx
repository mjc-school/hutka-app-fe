import React, { useState } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MyMap, StyledButton } from '../../components';

import { Colors, TextStyles } from '../../common';

export default function Map(props) {
    const { choosed, index } = props;
    return (
        <View style={styles.container}>
            <MyMap data={index} />
            <View style={styles.absolute}>
                <StyledButton
                    buttonStyle="primary"
                    text="Экспорт в навигатор"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Colors.background,
    },
    absolute: {
        bottom: '10%',
        position: 'absolute',
    },
});
