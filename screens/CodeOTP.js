import { View, Text, StatusBar, Pressable, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./StyleGlobal";
import { OtpInput } from "react-native-otp-entry";
export default function CodeOTP({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <StatusBar />
      <View
        style={{
          height: "90%",
          paddingTop: 55,
          marginHorizontal: 15,

          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 40 }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "700",
              fontStyle: "normal",

              color: "#FCC434",
            }}
          >
            Confirm OTP code
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              fontStyle: "normal",

              color: "#F2F2F2",
            }}
          >
            You just need to enter the OTP sent to the registered phone number
            (704) 555-0127.
          </Text>

          <OtpInput
            focusColor="rgba(252, 196, 52, 1.0)"
            numberOfDigits={6}
            theme={{
              pinCodeTextStyle: styles.TextInput,
              pinCodeContainerStyle: styles.Border,
            }}
          />
          <Text
            style={{
              alignSelf: "flex-end",
              fontWeight: "700",
              fontStyle: "normal",
              color: "#F2F2F2",
            }}
          >
            00:59
          </Text>
        </View>
        <View>
          <Pressable
            onPress={() => navigation.navigate("HomeTab")}
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
      </View>
    </View>
  );
}
