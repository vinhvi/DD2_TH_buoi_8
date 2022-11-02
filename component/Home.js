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
      <Button title="Cau 4" onPress={() => navigation.navigate("Cau4")} />
      <Button title="Cau 5" onPress={() => navigation.navigate("Cau5")} />
      <Button title="Cau 6" onPress={() => navigation.navigate("Cau6")} />
      <Button title="Cau 7" onPress={() => navigation.navigate("Cau7")} />
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
