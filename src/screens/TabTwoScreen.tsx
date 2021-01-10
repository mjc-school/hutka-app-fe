import React, {useState, } from 'react';
import { Button, Platform, StyleSheet, TextInput, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { RouteCard } from '../components';
import { Colors } from '../common';



// import { Text, View } from '../../components/Themed';

export default () => {
  const [kmlPath, setKmlPath] = useState("");


  // const loadKml = async() => {
    
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <ScrollView>
        <RouteCard />
        <RouteCard />
      </ScrollView>
   
    <Text>{Platform.OS + " ver."+ Platform.Version + " "}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
