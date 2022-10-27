import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cau1 from "./component/Cau1";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Cau1></Cau1>
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
