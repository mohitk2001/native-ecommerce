import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
const Items = ({ data, key }) => {
  return (
    <View style={styles.Items_container}>
      <Text>{data.category}</Text>
      <Icon name={data.icon} size={25} style={styles.category_icons}/>
    </View>
  );
};

const TopCategory = () => {
  const DATA = [
    {
      id: 1,
      category: "All",
      icon: "table",
    },
    {
      id: 1,
      category: "Footwear",
      icon: "",
    },
    {
      id: 1,
      category: "Topwear",
      icon: "shirt",
    },
    {
      id: 1,
      category: "Men",
      icon: "table",
    },
    {
      id: 1,
      category: "Women",
      icon: "table",
    },
    {
      id: 1,
      category: "Children",
      icon: "table",
    },
    {
      id: 1,
      category: "Winter",
      icon: "table",
    },
    {
      id: 1,
      category: "Summer",
      icon: "table",
    },
    {
      id: 1,
      category: "Grocery",
      icon: "table",
    },
    {
      id: 1,
      category: "Watch",
      icon: "table",
    },
  ];
  return (
    <View style={styles.TopCategory_Container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        // contentContainerStyle={styles.TopCategory_Scroll}
      >
        {DATA.map((data, index) => {
          return (
            <View style={styles.TopCategory_Scroll} key={index}>
              <Items data={data}  />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TopCategory;
