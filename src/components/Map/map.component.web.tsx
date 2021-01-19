import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import MapView from 'react-native-maps';
// import { KmlLayer } from "react-google-maps";

import Geojson, { makeOverlays } from './GeoJson';

import CustomMarker from './CustomMarker';

export default function MyMap(props) {
    const { data } = props;
    console.log(data);
    const geojsonLike = { features: data };
    return (
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
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height - 300,
    },
});
