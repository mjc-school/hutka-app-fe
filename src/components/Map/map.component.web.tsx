import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import MapView from "react-native-maps";
// import { KmlLayer } from "react-google-maps";
import { Belarus, BelarusShort } from "../../utils";
import Geojson, { makeOverlays } from "./GeoJson";

import kmlMarkupParsed, {
  kmlTextToGeoJson,
} from "../../utils/kmlparser/kmlMapParser";
import { MapContext } from "../../screens/TabOneScreen";
import CustomMarker from "./CustomMarker";

//в оригинале мы юзаем react-google-maps которые обернуты библиотекой  react-native-web-maps
// В нейтиве юзается react-native-maps
export default function MyMap() {
  const [geo, setGeo] = React.useState<any>(null);

  const myPlace = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [27.568, 53.894],
          color: "ff3644db",
        },
      },
    ],
  };
  return (
    <View style={styles.container}>
      <MapContext.Consumer>
        {(route) =>
          route && (
            <MapView
              style={styles.mapStyle}
              defaultZoom={6}
              region={{
                latitude: 53.893,
                longitude: 27.567,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
              initialRegion={{
                latitude: 53.893,
                longitude: 27.567,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
            >
              {/* <MapView.Marker
                title="BAM"
                description="Shape the future of mobile with us"
                coordinate={{ latitude: 53.894, longitude: 27.568 }}
                chi
              >
                <CustomMarker />
              </MapView.Marker> */}

              <Geojson
                geojson={kmlTextToGeoJson(route.kml)}
                strokeColor="yellow"
                fillColor="black"
                strokeWidth={2}
              />
            </MapView>
          )
        }
      </MapContext.Consumer>
      {/* <MapView
        style={styles.mapStyle}
        defaultZoom={6}
        region={{
          latitude: 53.893,
          longitude: 27.567,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        initialRegion={{
          latitude: 53.893,
          longitude: 27.567,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <KmlLayer
<<<<<<< HEAD
      url="https://www.google.com/maps/d/kml?mid=1EZOTjkxsR29lvHC7IPz6E2K-g41awFmA&forcekml=1"
      options={{ preserveViewport: true }}
    />
    </MapView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: 200
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    },
    mapStyle: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height - 300
    }
=======
          url="https://www.google.com/maps/d/kml?mid=1EZOTjkxsR29lvHC7IPz6E2K-g41awFmA&forcekml=1"
          options={{ preserveViewport: true }}
        />
      </MapView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  mapStyle: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height - 300,
  },
>>>>>>> feat/map-component
});
