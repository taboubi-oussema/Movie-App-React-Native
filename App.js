import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigneIn from "./screens/SingIn";
import ProfileUser from "./screens/ProfileUser";
import Username from "./screens/username";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="oe"
          component={Username}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ProfileUser"
          component={ProfileUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SigneIn"
          component={SigneIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="username"
          component={Username}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
