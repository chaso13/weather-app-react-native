import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'; 

const WEATHER_API_KEY = '3433d3fb726dc1c683737133264e9cb9'

export default function App() {
  
  {/* initializes error message variable store */}
  const [errorMessage, setErrorMessage ] = useState(null)
  
  useEffect(() =>{
    load()
  },[])
  async function load(){
    try {
      {/* Request user input to enable location services */}
      let { status } = await Location.requestForegroundPermissionsAsync()

      if ( status != 'granted'){
        {/* Error message thrown if location services are not granted*/}
        setErrorMessage( 'Access to location services is required to run this application')
        return
      }

      const location = await Location.getCurrentPositionAsync()

      const {latitude, longitude} = location.coords
      {/* Alert message to test Latitude and Longitude are being gathered from location services*/}
      alert(`Latitude : ${latitude} , Logitude : ${longitude}`)

    } catch (error) {
      
    }
  }
  return (
    <View style={styles.container}>
      <Text>Howdy Partner!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
