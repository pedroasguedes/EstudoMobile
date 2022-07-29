import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

export default function TelaMapa() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: -23.54081373001449,
        longitude: -46.57496830239368,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      }}
      />
       <Marker
       title="Senac Tatuapé"
      description="Escola de TI"
      coordinate={{
        latitude: -23.54081373001449,
        longitude: -46.57496830239368
      }}
      
      
    />
    </View>
  );
}