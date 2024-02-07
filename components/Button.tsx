import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function AppButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.viewoutside}>
        <LinearGradient colors={["#8A4593", "#452251"]} style={styles.button}>
          <View style={styles.icon}>
            <Text style={styles.text}>{title} </Text>
            <MaterialCommunityIcons
              style={styles.icon2}
              name="rotate-3d-variant"
              size={25}
              color="white"
            />
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    paddingHorizontal: 30,
    width: "60%",
    marginVertical: 0,
    overflow: "hidden",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "PoppinsLight",
  },
  icon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon2: {
    paddingBottom: 3,
  },
  viewoutside: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 8,
  },
});

export default AppButton;
