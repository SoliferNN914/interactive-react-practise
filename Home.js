import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Homepage</Text>
      <TouchableOpacity
        style={styles.button}
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}>
        <Text>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        title="Go to About"
        onPress={() => navigation.navigate("About")}>
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    color: "white",
    padding: 30,
    backgroundColor: "pink",
  },
});

export default HomeScreen;
