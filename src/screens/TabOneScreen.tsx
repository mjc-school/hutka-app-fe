import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



import EditScreenInfo from '../../components/EditScreenInfo';
import {MyMapComponent} from '../../components/Map';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor={"#eee"} darkColor="rgba(255,255,255,0.1)" />

      <MyMapComponent isMarkerShown={true} />

      <Button title="Arr" onPress={()=>{}}/>
      

      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </View>
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
