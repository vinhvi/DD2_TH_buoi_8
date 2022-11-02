import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Text } from "react-native";
function Cau4() {
  const startValue = new Animated.Value(0);
  const endValue = 350;
  const duration = 3000;
  useEffect(() => {
    Animated.timing(startValue, {
      toValue: endValue,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [startValue, endValue, duration]);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 5000,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [
              {
                translateX: startValue,
              },
            ],
          },
        ]}
      >
        <Text style={styles.text}>Hello World!!!</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.fadingText}>Welcome to Animation</Text>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  square: {
    alignItems: "center",
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
  text: {
    marginTop: 20,
    alignContent: "center",
    color: "white",
  },
});

export default Cau4;
