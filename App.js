import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screen/Home";
const Stack = createNativeStackNavigator();
const  Parent=()=>{
  return (
    <View style={styles.container}> 
    <StatusBar style="default" />
   <Home/>
    </View>
  )
}
export default function App() {
  return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Parent}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
