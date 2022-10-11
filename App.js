import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "./Components/Header";
export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="default" />
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
