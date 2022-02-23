import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import codePush from "react-native-code-push";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import {LogBox} from "react-native";
import {MainNavigator} from "./Navigation/MainNavigator";
import AlgoDetailsScreen from './screens/AlgoDetailsScreen';

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE
}

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ])
  return (
        <NavigationContainer>
          <StatusBar barStyle={'light-content'} />
          <MainNavigator />
          {/* <AlgoDetailsScreen /> */}
        </NavigationContainer>
  );
};
export default codePush(codePushOptions)(App);
