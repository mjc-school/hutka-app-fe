import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import MapView from '../../components/Map/MapView';



import EditScreenInfo from '../../components/EditScreenInfo';
import {MyMapComponent} from '../../components/Map';


export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor={"#eee"} darkColor="rgba(255,255,255,0.1)" />

      <Button title="Arr" onPress={()=>{}}/>
      <MapView defaultZoom={15} region={{ latitude: 48.86, longitude: 2.34 }}  />

      

      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
