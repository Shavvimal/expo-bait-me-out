import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import * as Haptics from "expo-haptics";
import Button from "@/components/Button";
// Import JSON data
import truths from "@/assets/data/questions.json";

export default function TabOneScreen() {
  const [truth, setTruth] = useState(
    "Click the button to generate a random truth."
  );

  const pressed = () => {
    let id = Math.floor(Math.random() * truths.length);
    setTruth(truths[id].truth);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/images/bg.json")}
        autoPlay
        loop
        style={StyleSheet.absoluteFillObject} // Make LottieView fill the entire screen and position it absolutely
        resizeMode="cover"
      />
      <View style={styles.truthContainer}>
        <Text style={styles.textContainer}>Truth•</Text>
        <Text style={styles.text}>{truth}</Text>
        <Button title="Bait Me Out" onPress={pressed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", // Ensure the background is transparent for LottieView to be visible
  },
  truthContainer: {
    // Removed color style since it's not valid for View container, use backgroundColor or apply color to text elements
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1, // Ensure this container is above the LottieView
  },
  textContainer: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "PoppinsBold",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
    marginHorizontal: "5%",
    marginBottom: 18,
    fontFamily: "PoppinsLight",
  },
});
