import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView} /> 
      <View style={styles.blueView} >
        <ScrollView>

        </ScrollView>
      </View>
      <View style={styles.redView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
  },
  yellowView: {
    flex:1,
    height: 200,
    backgroundColor: "#e1e8f0",
    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0
   },
   elevation: 10
  },
  blueView: {
    flex:8,
    height: "auto",
    backgroundColor: "white"
  },
  redView: {
    flex:1,
    backgroundColor: "#e1e8f0",
    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.9,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0
   },
   elevation: 10
  }
});
