import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import cn from "react-native-classnames";
import { Colors, TextStyles } from "../../common";

export default function QuizWaiting(props: any) {
  const { navigation } = props;

  const onGoToDashboard = () => {
    navigation.navigate("Dashboard");
  };
  setTimeout(() => onGoToDashboard(), 1000);

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 208, width: 208 }}
        source={require("../../../assets/images/App Icon.png")}
      />

      <Text style={TextStyles.H1}>Ищем маршруты</Text>
      <Text style={TextStyles.H1}>...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: Colors.background,
  },
});
