import React from "react";
import { View, Text } from "react-native";

export default function CustomMarker() {
  return (
    <View style={{ transform: 'translate(-50%, -50%)', flex: 1, zIndex: 1000, backgroundColor: 'red', borderRadius: '50%', flex: 1, justifyContent: 'center', alignContent:'center', alignItems:'center'}}>
      <Text>123</Text>
    </View>
  );
}
