import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import * as Icons from '@expo/vector-icons';
import { IconButtonSmall } from './index';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../common';

export const BackButton = (props: { onPress: () => void }) => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                position: 'absolute',
                top: 16,
                left: 16,
                zIndex: 1000,
            }}
        >
            <IconButtonSmall
                iconName="chevron-back"
                iconType="Ionicons"
                iconColor={Colors.white}
                iconSize={16}
                iconStyle={{ opacity: 1 }}
                containerStyle={{ opacity: 0.65 }}
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};
