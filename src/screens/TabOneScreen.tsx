import * as React from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  Dimensions,
  TextInput,
  Picker,
} from "react-native";

import MapView, { Geojson } from "react-native-maps";

import EditScreenInfo from "../components/EditScreenInfo";
import MyMap from "../components/Map/map.component";
// import { KmlLayer, Marker } from "react-google-maps";

interface IRoute {
  id: string;
  kml: string;
  tags: string[];
  name: string;
  description: string;
}

export const MapContext = React.createContext<IRoute | null>(null);

export default function TabOneScreen() {
  const [searchTag, setSearchTag] = React.useState("");
  const [routes, setRoutes] = React.useState<IRoute[]>([]);
  const [selectedRoute, setSelectedRoute] = React.useState<IRoute | null>(null);

  const onRoutesSearch = React.useCallback(() => {
    const body = {
      tags: [searchTag],
    };
    fetch("api/routes/search", { method: "POST", body: JSON.stringify(body) })
      .then((response) => response.text())
      .then((resp) => JSON.parse(resp))
      .then(setRoutes);
  }, [searchTag]);

  const onSelectedRouteChange = React.useCallback(
    (id) => {
      const route = routes.find((route) => route.id === id) as IRoute;
      setSelectedRoute(route);
    },
    [routes, setSelectedRoute]
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View
        style={styles.separator}
        lightColor={"#eee"}
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.js" /> */}

      <View style={styles.search}>
        <TextInput
          style={{
            flexGrow: 1,
            height: 40,
            borderColor: "gray",
            borderWidth: 2,
          }}
          onChangeText={(text) => setSearchTag(text)}
          value={searchTag}
        />
        <Button onPress={onRoutesSearch} title="Search routes" color="tomato" />
      </View>
      {searchTag && routes?.length > 0 && (
        <Picker
          selectedValue={selectedRoute?.id || ''}
          style={{ height: 40, width: 150, marginBottom: 30 }}
          onValueChange={onSelectedRouteChange}
        >
          {routes.map((route) => (
            <Picker.Item key={route.id} label={route.name} value={route.id} />
          ))}
        </Picker>
      )}
      <MapContext.Provider value={selectedRoute}>
        <MyMap></MyMap>
      </MapContext.Provider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    height: "10%",
  },
  search: {
    flexDirection: "row",
    marginVertical: 30,
    width: "60%",
  },
  mapStyle: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height - 20,
  },
});
