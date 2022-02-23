import React from "react";
import { Button, Text, View } from "react-native";
import styles from "./styles";

const Home = props => {
  return (
    <View style={styles.container}>
      <Text>
        Home Page Component
      </Text>
      <Button title={"Go to Details Page"} onPress={() => {
        props.navigation.navigate("DetailScreen");
      }} />
    </View>
  )
}

export default Home;
