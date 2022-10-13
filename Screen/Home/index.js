import { View, Text,TextInput  } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import React from 'react'
import Header from '../../Components/Header'
import styles from './styles'
import HighLightTop from '../../Components/HighLightTop'
import TopCategory from '../../Components/TopCategory'
const Home = () => {
  return (
    <View style={styles.Home_conatiner}>
      <Header/>
      <View style={styles.Home_SearchBox}>
        <View style={styles.Home_SearchBox_Sub}>
          <TextInput
           placeholder="useless placeholder"
           style={styles.Home_SearchBox_Input}
          />
          <Icon name='search' style={styles.Header_Search_Icon}/>
        </View>
      </View>
      <HighLightTop/>
      <TopCategory/>
    </View>
  )
}

export default Home