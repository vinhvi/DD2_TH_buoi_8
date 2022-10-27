import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Cau 1" onPress={() => navigation.navigate("Cau1")} />
      <Button title="Cau 2" onPress={() => navigation.navigate("Cau2")} />
      <Button title="Cau 3" onPress={() => navigation.navigate("Cau3")} />
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
