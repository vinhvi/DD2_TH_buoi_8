import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Cau1 from "./component/Cau1";
import Cau2 from "./component/Cau2";
import Home from "./component/Home";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cau1" component={Cau1} />
        <Stack.Screen name="Cau2" component={Cau2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
