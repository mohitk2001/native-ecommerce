import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from "./style"
// import Onlineshop from "../../assets/OnlineShop.jpg"
const HighLightTop = () => {
  return (
    <View style={styles.HightLight_Container}>
      <Image 
      resizeMode="contain"
      source={require('../../assets/OnlineShop.jpg')}
      style={styles.HightLight_Container_Image} />
    </View>
  )
}

export default HighLightTop