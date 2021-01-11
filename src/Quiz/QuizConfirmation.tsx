import React from "react";
import { View, Text, Image } from "react-native";
import cn from "react-native-classnames";
import { Colors, TextStyles } from "../common";
import { StyledButton } from "../components";

export const QuizConfirmation = (props: any) => {
  const { onPress, text, backgroundStyle, textStyle, navigation } = props;
  const containerStyles = cn(styles, "container");
  const textStyles = cn(styles, text, textStyle);
  const buttonContainerStyles = cn(styles, "buttonContainer");

  const onStart = () => {
    navigation.navigate("Quiz");
  };
  const onGoToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={containerStyles}>
      <Image
        style={{ height: 208, width: 208 }}
        source={require("../../assets/images/App Icon.png")}
      />

      <Text style={TextStyles.Large}>Привет!</Text>
      <Text style={TextStyles.H6}>
        Для начала, давай пройдем опрос, и мы подберем для тебя подходящие
        маршруты
      </Text>
      <View style={buttonContainerStyles}>
        <StyledButton buttonStyle="primary" text="Начать" onPress={onStart} />
        <StyledButton
          buttonStyle="transparent"
          text="Пропустить опрос"
          onPress={onGoToDashboard}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    minHeight: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: Colors.background,
  },
  yellow: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: Colors.border,
    borderWidth: 1,
  },
  transparent: {},
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: "20%",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: Colors.basic,
  },
};
