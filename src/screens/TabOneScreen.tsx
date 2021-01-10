import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Dimensions } from 'react-native';

import MapView, {Geojson} from 'react-native-maps';
import { Colors } from '../common';


import EditScreenInfo from '../components/EditScreenInfo';
import MyMap from '../components/Map/map.component';
// import { KmlLayer, Marker } from "react-google-maps";



export default function TabOneScreen() {
  


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor={"#eee"} darkColor="rgba(255,255,255,0.1)" />

      <EditScreenInfo path="/screens/TabOneScreen.js" />
    <MyMap></MyMap>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    backgroundColor: Colors.background,
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
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height - 20 ,
  },
});
