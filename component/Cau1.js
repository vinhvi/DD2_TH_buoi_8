import React, { useEffect, useRef } from "react";
import { Animated, Text, StyleSheet, SafeAreaView } from "react-native";

const Cau1 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[{ opacity: fadeAnim }]}>
        <Text style={styles.fadingText}>Wellcome to Animation ReactNative</Text>
      </Animated.View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fadingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
export default Cau1;
