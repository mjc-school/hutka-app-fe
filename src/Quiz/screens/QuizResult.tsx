import React, { useState } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { RouteCard, StyledButton } from '../../components';
import { Colors, TextStyles } from '../../common';

export default function QuizResult() {
    return (
        <View style={styles.container}>
            <View>
                <RouteCard />
                <RouteCard />
            </View>
            <Text style={styles.headerText}>Ничего не понравилось?</Text>

            <Text style={styles.secondaryText}>
                В нашем каталоге 211 маршрутов на любой вкус!
            </Text>
            <StyledButton buttonStyle="primary" text="В каталог маршрутов" />
            <StyledButton buttonStyle="secondary" text="Пройти опрос ещё раз" />
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    headerText: TextStyles.H1,
    secondaryText: TextStyles.Body2,
});
