import React, { useMemo } from "react";
import cn from "react-native-classnames";

import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { Colors, TextStyles } from "../../common";

const ProgressDash = ({ passed }: { passed: boolean }) => (
  <View
    style={{
      flex: 1,
      width: "5%",
      height: 5,
      margin: 5,
      backgroundColor: passed ? Colors.accent : Colors.greyLight,
    }}
  />
);

export const ProgressBar = (props: {
  maxItems: number;
  currentItem: number;
}) => {
  const { maxItems, currentItem } = props;

  const Dashes = useMemo(() => {
    const arr = [...Array(maxItems)];

    const replacer = (val, currentIndex) => {
      // console.log(currentIndex, currentItem, currentIndex <= currentItem);
      return (
        <ProgressDash key={currentIndex} passed={currentIndex <= currentItem} />
      );
    };
    return arr.map(replacer);
  }, [maxItems, currentItem]);

  return <View style={styles.container}>{Dashes}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderColor: Colors.border,
    maxHeight: 20,
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyles: TextStyles.H1,
});
