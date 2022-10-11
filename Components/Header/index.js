import { Text, View } from "react-native";
import React from "react";
import styles from "./style";
import { Avatar } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
const Header = () => {
  return (
    <View style={styles.Header_Container}>
      <View style={styles.Header_sub_container}>
        <Icon name="bars" size={30} style={styles.Header_Icon_Size} />
        <Text style={{fontWeight:"500",fontSize:25,color:"#000"}}>Home</Text>
        <View style={styles.Header_container_right}>
          <Icon name="heart" size={30} style={[styles.Header_Icon_Size,styles.Header_Right]} />
          <Avatar
            //    size={}
            rounded
            title="M"
            containerStyle={styles.Header_userProfile}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
