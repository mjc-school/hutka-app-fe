import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Marker status within current route progress
export enum MarkerStatus {
    Visited,
    Current,
    Upcoming,
}

interface Props {
    index: number;
    status: MarkerStatus;
}

const MARKER_RADIUS = 24;
const TAIL_LENGTH = 5;
const CIRCLE_PADDING = 2;

export default function CustomMarker({ index, status }: Props) {
    const styles = React.useMemo(() => {
        const colors = getMarkerColors(status);
        return StyleSheet.create({
            wrapper: {
                position: 'relative',
                transform: [
                    { translateX: -MARKER_RADIUS },
                    { translateY: -MARKER_RADIUS * 2 - TAIL_LENGTH },
                ],
                borderRadius: MARKER_RADIUS,
                // shadow
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.6,
                shadowRadius: 6,
                elevation: 5,
            },
            outer: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: CIRCLE_PADDING,
                width: MARKER_RADIUS * 2,
                height: MARKER_RADIUS * 2,
                borderRadius: MARKER_RADIUS,
                backgroundColor: '#fff',
            },
            tail: {
                position: 'absolute',
                bottom: 1,
                left: '50%',
                transform: [
                    { translateX: -TAIL_LENGTH },
                    { translateY: TAIL_LENGTH },
                    { rotate: '45deg' },
                ],
                width: TAIL_LENGTH * 2,
                height: TAIL_LENGTH * 2,
                borderBottomRightRadius: 2,
                backgroundColor: '#fff',
                // shadow
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.6,
                shadowRadius: 6,
                elevation: 5,
            },
            inner: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: MARKER_RADIUS - CIRCLE_PADDING / 2,
                ...colors,
            },
            text: {
                ...colors,
                fontSize: 24,
            },
        });
    }, [status]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.tail}></View>
            <View style={styles.outer}>
                <View style={styles.inner}>
                    <Text style={styles.text}>{index}</Text>
                </View>
            </View>
        </View>
    );
}

function getMarkerColors(
    status: MarkerStatus,
): { backgroundColor: string; color: string } {
    switch (status) {
        case MarkerStatus.Visited:
            return {
                backgroundColor: '#0bbb65',
                color: '#fff',
            };
        case MarkerStatus.Current:
            return {
                backgroundColor: '#fee900',
                color: '#000',
            };
        case MarkerStatus.Upcoming:
            return {
                backgroundColor: '#6c717a',
                color: '#fff',
            };
    }
}
