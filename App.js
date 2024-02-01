import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigneIn from "./screens/SingIn";
import ProfileUser from "./screens/ProfileUser";
import Username from "./screens/username";
import SingUp from './screens/SingUp'

import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Fontisto,
  Feather,
  SimpleLineIcons,
  Octicons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import CodeOTP from "./screens/CodeOTP";
import NowPlaying from "./screens/NowPlaying";
import HomePage from "./screens/HomePage";
import Ticket from "./screens/Ticket";



const Tab = createBottomTabNavigator();
 function HomeTab() {
   return (
     <>
       <StatusBar />
       <Tab.Navigator
         screenOptions={{
           tabBarInactiveTintColor: "#fff",
           tabBarActiveTintColor: "#f5dd4b",
           tabBarStyle: {
             backgroundColor: "#000",
             height: 70,
             paddingBottom: 10,
           },
         }}
       >
         <Tab.Screen
           name="Home"
           component={HomePage}
           options={{
             tabBarLabel: "Home",
             headerShown: false,
             tabBarIcon: ({ size, color }) => (
               <AntDesign name="home" size={24} color={color} />
             ),
           }}
         />
         <Tab.Screen
           name="Ticket"
           component={Ticket}
           options={{
             tabBarLabel: "Ticket",
             headerShown: false,
             tabBarIcon: ({ size, color }) => (
               <MaterialCommunityIcons
                 name="ticket-confirmation"
                 size={24}
                 color={color}
               />
             ),
           }}
         />
         <Tab.Screen
           name="Movie"
           component={NowPlaying}
           options={{
             tabBarLabel: "Movie",
             headerShown: false,
             tabBarIcon: ({ size, color }) => (
               <AntDesign name="videocamera" size={24} color={color} />
             ),
           }}
         />
         <Tab.Screen
           name="ProfileUser"
           component={ProfileUser}
           options={{
             tabBarLabel: "Profile",
             headerShown: false,
             tabBarIcon: ({ size, color }) => (
               <Ionicons name="person-sharp" size={24} color={color} />
             ),
           }}
         />
       </Tab.Navigator>
     </>
   );
 }

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="SigneIn"
          component={SigneIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{
            title: "Sing up",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
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
        <Stack.Screen
          name="CodeOTP"
          component={CodeOTP}
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
