import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Dimensions } from 'react-native';

import MapView from 'react-native-maps';


import EditScreenInfo from '../../components/EditScreenInfo';
import {MyMap} from '../../components/Map';


export default function TabOneScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor={"#eee"} darkColor="rgba(255,255,255,0.1)" />

      <Button title="Arr" onPress={()=>{}}/>

      <MapView style={styles.mapStyle} defaultZoom={15} region={{ latitude: 53.893, longitude: 27.567, latitudeDelta: 0.1, longitudeDelta: 0.1  }} initialRegion={{ latitude: 53.893, longitude: 27.567, latitudeDelta: 0.1, longitudeDelta: 0.1 }} />

      

      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height - 20 ,
  },
});
