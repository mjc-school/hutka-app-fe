import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
// import { SearchBar } from 'react-native-elements';

import { Colors, TextStyles, PlaceType } from "../../../common";
import { CardButton } from "../..";

export interface HorizontalPlaceScrollOwnProps {
  places: PlaceType[];
  addQuizButton: boolean;
  callbackFabric: (Place)=> void;
}

export default function Home(props: HorizontalPlaceScrollOwnProps) {
  const { places, addQuizButton } = props;

  const press = () => console.log("route");


  const _renderHeader = () => (
    <View style={styles.cardContainer}>
      <CardButton
        backgroundColor={Colors.accent}
        type={"Orange"}
        text="Пройти опрос"
      />
    </View>
  );

  const _renderItem = (item) => (
    <View style={styles.cardContainer}>
      <RouteImage {...item} />
    </View>
  );

  return (
    <View style={styles.contentContainer}>
      <FlatList
        horizontal
        data={places}
        // style={styles.horizontalContainer}
        // contentContainerStyle={styles.cardContainer}

        ListHeaderComponent={_renderHeader}
        renderItem={_renderItem}
        keyExtractor={(item) => item._id}
        extraData={{}}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "90%",
    minWidth: "100%",
    backgroundColor: Colors.background,
  },
  horizontalContainer: {
    maxHeight: 160,
  },
  contentContainer: {
    marginVertical: 20,
  },
  cardContainer: {
    marginRight: 20,
  },
});
