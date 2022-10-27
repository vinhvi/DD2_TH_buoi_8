import React, { useRef, useEffect } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const Cau3 = () => {
  const movecomp = new Animated.Value(0);

  const move = () => {
    Animated.timing(movecomp, {
      toValue: 320,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };
  const stop = () => {
    Animated.timing(movecomp, {
      toValue: 320,
      duration: 5000,
      useNativeDriver: false,
    }).stop();
  };
  const reset = () => {
    movecomp.setValue(0);
  };

  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", height: 800 }}>
        <Animated.Text style={{ marginLeft: movecomp }}>Hello</Animated.Text>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            move();
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            stop();
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            reset();
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 140,
    marginTop: 20,
    backgroundColor: "gray",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  fadingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
export default Cau3;
