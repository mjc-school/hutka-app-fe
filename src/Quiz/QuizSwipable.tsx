import React, { useState, useRef } from "react";
import Swiper from "react-native-deck-swiper";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  IconButton,
  ImageCard,
  IconCard,
  InputCard,
  StyledButton,
} from "../components";
import { Colors } from "../common";
import { ProgressBar } from "./ProgressBar";

export const QuizSwipable = () => {
  const [swipedAllCards, setSwipedAllCards] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState("");

  const swiperRef = useRef();

  const onSwiped = (type) => {
    console.log(`on swiped ${type}`);
  };

  const Examplecard = {
    type: "imageCard",
    imageUri:
      "http://img.tyt.by/n/regiony/06/9/shchuchynshchyna_20201020_tutby_gord-8364.jpg",
    caption: "Хочешь отдохнуть на природе?",
    parameter: "nature",
    result: undefined,
  };
  const cards = ["ImageCard", "InputCard", "IconCard"];

  const renderCard = (card) => {
    if (card === "InputCard") {
      return <InputCard />;
    }
    if (card === "IconCard") {
      return <IconCard />;
    }
    if (card === "ImageCard") {
      return (
        <ImageCard
          imageUri={Examplecard.imageUri}
          caption={Examplecard.caption}
        />
      );
    }
    return <View />;
  };

  const onSwipedAllCards = () => setSwipedAllCards(false);

  const swipeLeft = () => {
    swiperRef.swipeLeft();
  };
  const onGoToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <ProgressBar maxItems={cards.length} currentItem={cardIndex} />
      <View style={styles.cardContainer}>
        <Swiper
          ref={swiperRef}
          cards={cards}
          renderCard={renderCard}
          onSwiped={(cardIndex) => {
            setCardIndex(cardIndex);
          }}
          onSwipedAll={() => {
            setSwipedAllCards(true);
          }}
          cardIndex={0}
          containerStyle={{
            flex: 1,
            maxHeight: "45%",
            maxWidth: "100%",
            alignSelf: "baseline",
          }}
          backgroundColor={Colors.greyLight}
          disableTopSwipe
          disableBottomSwipe
          stackSize={1}
        />
      </View>

      <View style={styles.buttonContainer}>
        <IconButton color="#e76b6b" name="heart" iconType="FontAwesome" />
        <IconButton color="#000000" name="close" iconType="EvilIcons" />
      </View>

      <View style={{ alignSelf: "center", top: "80%" }}>
        <StyledButton
          buttonStyle="transparent"
          text="Пропустить опрос"
          onPress={onGoToDashboard}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cardContainer: {
    top: "-5%",
    maxWidth: "30%",
    alignSelf: "baseline",
  },
  card: {
    maxWidth: "50%",
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: "center",
    backgroundColor: "white",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "35%",

    maxHeight: "10%",
    alignItems: "center",
    alignSelf: "center",
    top: "80%",
  },
  text: {
    textAlign: "center",
    color: Colors.basic,
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent",
  },
});
