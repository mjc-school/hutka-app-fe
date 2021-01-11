import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import cn from "react-native-classnames";

import { Colors, TextStyles } from "../../common";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CommonCardStyles } from "../Cards";

const IconWithCaption = ({ iconName, caption }) => (
  <Text style={TextStyles.H7}>
    <MaterialCommunityIcons name={iconName} size={18} color={Colors.accent} />
    {caption}
  </Text>
);

export default function RouteCard(props: any): any {
  let { imageUri, caption } = props;
  caption = "";
  const users = 281;
  const time = "1 день";
  const distance = "600 км";
  return (
    <TouchableOpacity style={[CommonCardStyles.cardBorder, styles.container]}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.imageStyles}
          source={{
            uri:
              "https://ptzgovorit.ru/sites/default/files/original_nodes/0eeireesjfk.jpg",
          }}
        />
      </View>
      <View style={styles.sideContainer}>
        <Text style={styles.headText}>Ишколдь, Мир и озеро Свитязь</Text>
        <Text style={styles.textStyles}>
          Ишколдь – Полонечка – Вольно – Заосье – озеро Свитязь – Мир
        </Text>
        <View style={styles.bottomContainerStyles}>
          <IconWithCaption
            iconName={"account"}
            caption={users}
          ></IconWithCaption>
          <IconWithCaption
            iconName={"clock-outline"}
            caption={time}
          ></IconWithCaption>
          <IconWithCaption
            iconName={"map-marker-outline"}
            caption={distance}
          ></IconWithCaption>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    minHeight: 150,
    backgroundColor: Colors.cardBackround,
    margin: 15,
  },
  imageContainer: {
    maxWidth: "30%",
  },
  sideContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    padding: 10,
    textAlign: "center",
  },
  imageStyles: {
    flex: 1,
    // minWidth: 100,
    width: 100,
    minHeight: 50,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textContainer: {
    flex: 1,
    width: "100%",
    maxHeight: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondaryButton,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
  },
  headText: TextStyles.H7,
  captionText: {},
  ratingStyles: {},
  iconStyles: {
    textAlign: "center",
  },
  bottomContainerStyles: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
