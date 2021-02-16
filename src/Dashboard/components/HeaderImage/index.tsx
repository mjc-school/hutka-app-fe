import React from 'react';

import { StyleSheet, View, Image } from 'react-native';

export function HeaderImage(props) {
    const { imageUrl } = props;

    return (
        <View style={styles.container}>
            <Image style={styles.imageStyles} source={{ uri: imageUrl }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: '100%',
    },
    imageStyles: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        opacity: 0.85,
    },
});
