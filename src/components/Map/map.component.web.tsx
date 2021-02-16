import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import { KmlLayer } from "react-google-maps";

import Geojson, { makeOverlays } from './GeoJson';

import CustomMarker from './CustomMarker';

const point = JSON.parse(`{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        27.5589762,
        53.9005987,
        0
      ]
    },
    "properties": {
      "name": "Minsk, Belarus",
      "styleUrl": "#icon-1899-DB4436-nodesc",
      "styleHash": "-2c17104e",
      "styleMapHash": {
        "normal": "#icon-1899-DB4436-nodesc-normal",
        "highlight": "#icon-1899-DB4436-nodesc-highlight"
      },
      "icon-opacity": 1,
      "icon-color": "#db4436",
      "icon-scale": 1,
      "icon-offset": [
        32,
        64
      ],
      "icon": "https://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
      "label-scale": 0
    }
  }`);

export default function MyMap(props) {
    const { data } = props;
    const geojsonLike = { features: data || [] };
    return (
        <MapView
            style={styles.mapStyle}
            provider={PROVIDER_GOOGLE}
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
            <Geojson
                geojson={geojsonLike}
                strokeColor="yellow"
                fillColor="black"
                strokeWidth={2}
            />
        </MapView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    mapStyle: {
        width: '100%',
        height: '100%',
    },
});
