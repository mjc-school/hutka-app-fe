import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

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
export default function CustomMarker({ index, status }: Props) {
  const styles = React.useMemo(() => {
    const colors = getMarkerColors(status); 
    return StyleSheet.create({
      outer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: 2,
        width: 48,
        height: 48,
        transform: "translate(-50%, -100%)",
        borderRadius: "50%",
        backgroundColor: "#fff",
        // shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
        elevation: 5,
      },
      tail: {
        position: "absolute",
        bottom: 2,
        left: "50%",
        transform: "translate(-50%, 50%) rotate(45deg)",
        width: 10,
        height: 10,
        borderRadius: 2,
        backgroundColor: "#fff",
        // shadow
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.6,
        // shadowRadius: 6,
        // elevation: 5,
      },
      inner: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        ...colors
      },
      text: {
        ...colors,
        fontSize: 24
      }
    });
  }, [status]);

  return (
    <View style={styles.outer}>
      <View style={styles.tail}></View>
      <View style={styles.inner}>
        <Text style={styles.text}>{index}</Text>
      </View>
    </View>
  );
}

function getMarkerColors(status: MarkerStatus): { backgroundColor: string; color: string } {
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