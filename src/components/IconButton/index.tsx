import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import * as Icons from "@expo/vector-icons";
import cn from "react-native-classnames";
import { Colors, TextStyles } from "../../common";

export const IconButton = (props: any) => {
  const { name, color, onPress, iconType } = props;
  const IconProvider: any = Icons[iconType];
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>
        <IconProvider name={name} size={30} color={color} />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 60,
    maxWidth: 60,
    minHeight: 60,
    minWidth: 60,
    textAlign: "center",
    lineHeight: 60,

    borderWidth: 0.6,
    borderStyle: "solid",
    borderColor: Colors.basicSecond,
    borderRadius: 30,
    backgroundColor: "",
  },
});
