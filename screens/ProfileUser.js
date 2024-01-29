import { View, Text, StatusBar, Pressable, Image, Switch } from "react-native";
import React, { useState } from "react";

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

export default function ProfileUser({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ backgroundColor: "#000" }}>
      <StatusBar />
      <View
        style={{
          height: "100%",
          borderBottomColor: "grey",
          borderBottomWidth: 2,
          paddingTop: "5%",
          gap: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", gap: 24, marginHorizontal: 15 }}>
            <Image
              style={{ width: 90, height: 90 }}
              source={require("../assets/images/Ellipse 41.png")}
            />
            <View style={{ gap: 5 }}>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: "700",
                  fontStyle: "normal",
                  lineHeight: 48,
                  color: "#F2F2F2",
                }}
              >
                Angelina
              </Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Feather name="phone" size={20} color="#fff" />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    fontStyle: "normal",
                    lineHeight: 21,
                    color: "#DEDEDE",
                  }}
                >
                  (704) 555-0127
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Fontisto name="email" size={20} color="#fff" />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    fontStyle: "normal",
                    lineHeight: 21,
                    color: "#DEDEDE",
                  }}
                >
                  angelina@example.com
                </Text>
              </View>
            </View>
          </View>
          <Octicons
            onPress={() => navigation.navigate("username")}
            style={{ paddingRight: 15 }}
            name="pencil"
            size={24}
            color="#fff"
          />
        </View>

        <View
          style={{
            marginHorizontal: 15,
            flexDirection: "row",
            borderBottomColor: "grey",
            borderBottomWidth: 2,
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("SigneIn")}
            style={{
              flexDirection: "row",
              height: 50,
              gap: 30,
              width: "90%",
            }}
          >
            <Ionicons name="ticket" size={24} color="#fff" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                fontStyle: "normal",

                color: "#F2F2F2",
              }}
            >
              My ticket
            </Text>
          </Pressable>
          <SimpleLineIcons name="arrow-right" size={24} color="#fff" />
        </View>
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: "row",
            borderBottomColor: "grey",
            borderBottomWidth: 2,
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => console.log("fvff")}
            style={{
              flexDirection: "row",
              width: "90%",
              height: 50,
              gap: 30,
            }}
          >
            <AntDesign name="shoppingcart" size={24} color="#fff" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                fontStyle: "normal",

                color: "#F2F2F2",
              }}
            >
              Payment history
            </Text>
          </Pressable>
          <SimpleLineIcons name="arrow-right" size={24} color="#fff" />
        </View>
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: "row",
            borderBottomColor: "grey",
            borderBottomWidth: 2,
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => console.log("fvff")}
            style={{
              flexDirection: "row",
              width: "90%",
              height: 50,
              gap: 30,
            }}
          >
            <MaterialIcons name="translate" size={24} color="#fff" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                fontStyle: "normal",

                color: "#F2F2F2",
              }}
            >
              Change language
            </Text>
          </Pressable>
          <SimpleLineIcons name="arrow-right" size={24} color="#fff" />
        </View>
        <View
          style={{
            marginHorizontal: 15,
            flexDirection: "row",
            borderBottomColor: "grey",
            borderBottomWidth: 2,
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => console.log("fvff")}
            style={{
              flexDirection: "row",
              height: 50,
              gap: 30,
              width: "90%",
            }}
          >
            <MaterialIcons name="lock-outline" size={27} color="#fff" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                fontStyle: "normal",

                color: "#F2F2F2",
              }}
            >
              Change password
            </Text>
          </Pressable>
          <SimpleLineIcons name="arrow-right" size={24} color="#fff" />
        </View>
        <View
          style={{
            marginHorizontal: 13,
            flexDirection: "row",
            borderBottomColor: "grey",
            borderBottomWidth: 2,
            justifyContent: "space-between",
            paddingRight: "3%",
          }}
        >
          <Pressable
            onPress={() => console.log("fvff")}
            style={{
              flexDirection: "row",

              height: 50,
              gap: 30,
              width: "90%",
            }}
          >
            <MaterialCommunityIcons
              name="face-recognition"
              size={24}
              color="#fff"
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                fontStyle: "normal",
                color: "#F2F2F2",
              }}
            >
              Face ID / Touch ID
            </Text>
          </Pressable>
          <Switch
            trackColor={{ false: "grey", true: "grey" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f5dd4b"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
 
    </View>
  );
}
