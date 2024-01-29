import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";
export default function SingUp({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <SafeAreaView style={{ marginHorizontal: 15 }}>
        <View style={{ height: "70%", gap: 40 }}>
          <View
            style={{
              flexDirection: "row",
              height: 60,
              borderBottomColor: "grey",
              borderBottomWidth: 2,
              alignItems: "center",
              gap: 20,
            }}
          >
            <Feather name="phone" size={20} color="#fff" />
            <TextInput
              placeholder="(704) 555*****"
              keyboardType="numeric"
              placeholderTextColor="grey"
              style={{
                width: "90%",
                fontSize: 24,
                fontWeight: "700",
                fontStyle: "normal",
                color: "#F2F2F2",
              }}
            ></TextInput>
          </View>
          <Pressable
            onPress={() => navigation.navigate("CodeOTP")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 56,
              borderRadius: 64,
              backgroundColor: "#FCC434",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                fontStyle: "normal",

                color: "#000000",
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            height: "30%",
            backgroundColor: "",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 1, height: 1, backgroundColor: "grey" }}
            ></View>
            <Text style={{ marginRight: 10, marginLeft: 10, color: "#fff" }}>
              Or continue with
            </Text>
            <View
              style={{ flex: 1, height: 1, backgroundColor: "grey" }}
            ></View>
          </View>
          <Pressable
            style={{
              height: 56,
              borderRadius: 64,
              backgroundColor: "#1A1A1A",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 30, height: 30, marginRight: "3%" }}
                source={require("../assets/images/facebook.png")}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  fontStyle: "normal",
                  color: "#F2F2F2",
                }}
              >
                Facebook
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={{
              height: 56,
              borderRadius: 64,
              backgroundColor: "#1A1A1A",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 30, height: 30, marginRight: "3%" }}
                source={require("../assets/images/google.png")}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  fontStyle: "normal",
                  color: "#F2F2F2",
                }}
              >
                Google
              </Text>
            </View>
          </Pressable>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              fontStyle: "normal",
              textAlign: "center",
              color: "#B3B3B3",
              paddingBottom: "5%",
            }}
          >
            By sign in or sign up, you agree to our Terms of Service {"\n"}and
            Privacy Policy
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
