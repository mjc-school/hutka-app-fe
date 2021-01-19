import React from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import MapView, { Geojson, Marker } from 'react-native-maps';
import { Belarus } from '../../utils';
// import { kmlMarkup } from '../../utils/kmlparser/kmlMapParser';

export default function MyMap() {
    const myPlace = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: [53.894, 27.568]
                }
            }
        ]
    };

    return (
        <View>
            <Text>{`${Platform.OS} ver.${Platform.Version} `}</Text>

            <MapView
                style={styles.mapStyle}
                defaultZoom={6}
                region={{
                    latitude: 53.893,
                    longitude: 27.567,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
                initialRegion={{
                    latitude: 53.893,
                    longitude: 27.567,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
            >
                {/* <Marker
    title="BAM"
    description="Shape the future of mobile with us"
                  coordinate={{latitude: 53.894,
                    longitude: 27.568}}
                  
                /> */}

                {/* <Geojson 
      geojson={myPlace} 
      strokeColor="yellow"
      fillColor="black"
      strokeWidth={2}
    />


     <Geojson 
      geojson={JSON.parse(Belarus)} 
      strokeColor="red"
      fillColor="green"
      strokeWidth={2}
    /> */}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
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
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height - 20
    }
});
