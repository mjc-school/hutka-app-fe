import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  StyleSheetProperties,
} from "react-native";
import { CommonActions, useLinkProps } from "@react-navigation/native";
import cn from "react-native-classnames";
import { Colors, TextStyles } from "../common";
import { StyledButton, ImageCard, IconButton, IconCard } from "../components";
import { ProgressBar } from "./ProgressBar";

export function Quiz(props: any) {
  const { onPress, text, backgroundStyle, textStyle, navigation } = props;

  const onStart = () => {
    navigation.navigate("Quiz");
  };

  const card = {
    type: "imageCard",
    imageUri:
      "http://img.tyt.by/n/regiony/06/9/shchuchynshchyna_20201020_tutby_gord-8364.jpg",
    caption: "Хочешь отдохнуть на природе?",
    parameter: "nature",
    result: undefined,
  };

  const cards = [card, card, card];
  const onGoToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <ProgressBar maxItems={10} currentItem={4} />

      <IconCard></IconCard>
      <View style={styles.buttonContainer}>
        <IconButton color="#e76b6b" name="heart" iconType="FontAwesome" />
        <IconButton color="#000000" name="close" iconType="EvilIcons" />
      </View>
      <StyledButton
        buttonStyle="transparent"
        text="Пропустить опрос"
        onPress={onGoToDashboard}
      />
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
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "35%",
    maxHeight: "20%",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: Colors.basic,
  },
});
