import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import MapView from 'react-native-maps'
import RNGooglePlaces from 'react-native-google-places'

export default class App extends Component {

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
		console.log(place)
    })
    .catch(error => console.log(error.message))
  }

  render() {
   const { region } = this.props
   console.log(region)
   return (
    <View>
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.openSearchModal()}
      >
        <Text>Pick a Place</Text>
      </TouchableOpacity>
      </View>
    </View>
   )
 }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
})