import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import {
  useFonts,
  Poppins_300Light,
  Poppins_900Black,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import * as Haptics from "expo-haptics";

import Button from "./components/Button";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Poppins_900Black,
    Poppins_300Light,
    Poppins_700Bold,
  });

  const [truth, setTruth] = useState(
    "Click the button to generate a random truth."
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const truthData = require("./assets/data.json");

  const pressed = () => {
    let id = Math.floor(Math.random() * truthData.length);
    setTruth(truthData[id].truth);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require("./assets/4.json")}
        autoPlay
        loop
        resizeMode={"cover"}
      />
      <View style={stylesView.container}>
        <Text style={stylesText.container}> Truth• </Text>
        <Text style={stylesText2.container}>{truth}</Text>
        <Button title="Bait Me Out " onPress={pressed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const stylesView = StyleSheet.create({
  container: {
    color: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const stylesText = StyleSheet.create({
  container: {
    color: "white",
    fontSize: 40,
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
  },
});

const stylesText2 = StyleSheet.create({
  container: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
    fontFamily: "Poppins_300Light",
    marginHorizontal: "5%",
    marginBottom: 18,
  },
});
