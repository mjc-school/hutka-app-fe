import React, {useState, } from 'react';
import { Button, Platform, StyleSheet, TextInput, View, Text } from 'react-native';
import App from '../examples/AnimatedViews';



// import { Text, View } from '../../components/Themed';

export default () => {
  const [kmlPath, setKmlPath] = useState("");


  // const loadKml = async() => {
    
  // }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setKmlPath(text)}
      placeholder="Enter Url of kml to this line"
      value={kmlPath} 
    />*/}
    {/* {kmlMarkup} */}
    {/* <Button title="Enter"></Button> */}
    <App></App>
    {/* <Text>{Platform.OS + " ver."+ Platform.Version + " "}</Text>
      <EditScreenInfo path="/screens/TabTwoScreen.js" /> */}
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
