import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AlgoDetailsScreen from "../screens/AlgoDetailsScreen";

const Stack = createNativeStackNavigator();

export const MainNavigator = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="DetailScreen" component={AlgoDetailsScreen} />
    </Stack.Navigator>
  )
}
