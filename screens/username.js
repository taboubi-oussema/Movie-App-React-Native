import { View, Text, StatusBar, Pressable, TextInput, } from "react-native";
import React from "react";
import styles from "./StyleGlobal";
export default function Username() {
  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <StatusBar />
      <View
        style={{
          height: "60%",
          marginHorizontal: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 20 }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "700",
              fontStyle: "normal",
              color: "#FCC434",
            }}
          >
            Enter Username
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              fontStyle: "normal",
              color: "#F2F2F2",
            }}
          >
            Latin characters, no emoji/symbols
          </Text>
          <TextInput
            style={{
              width: "100%",
              height: 40,

              fontSize: 28,
              fontWeight: "700",
              fontStyle: "normal",

              color: "#F2F2F2",
              borderBottomColor: "grey",
              borderBottomWidth: 2,
            }}
            placeholder="username"
          ></TextInput>
        </View>
        <View>
          <Pressable style={[styles.Buttons, { backgroundColor: "#FCC434" }]}>
            <Text style={[styles.text, { color: "#000" }]}>Done</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
