import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";

export default function SigneIn() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          height: "8%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 16,
          }}
        >
          <Image source={require("../assets/images/Frame.png")} />
          <TouchableOpacity
            style={{
              width: 97,
              height: 36,
              borderRadius: 71,
              borderWidth: 1,
              borderColor: "rgba(230, 230, 230, 1.0)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 20, height: 20, marginRight: 6 }}
                source={require("../assets/images/translate.png")}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  fontStyle: "normal",
                  lineHeight: 18,
                  color: "#E6E6E6",
                }}
              >
                English
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: "65%",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}
      >
        <Image
          style={{
            width: 300,
            height: 290,
            borderRadius: 32,
          }}
          source={require("../assets/images/Rectangle.png")}
        />
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            fontStyle: "normal",
            lineHeight: 36,
            color: "#F2F2F2",
          }}
        >
          MBooking hello!
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 21,
            color: "#F2F2F2",
          }}
        >
          Enjoy your favorite movies
        </Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity
            style={{
              width: 8,
              height: 8,
              borderRadius: 71,
              backgroundColor: "#FCC434",
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 8,
              height: 8,
              borderRadius: 71,
              backgroundColor: "#FCC434",
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 8,
              height: 8,
              borderRadius: 71,
              backgroundColor: "#FCC434",
            }}
          ></TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: "27%",
          gap: 15,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: 56,
            borderRadius: 64,
            backgroundColor: "#FCC434",
            justifyContent: "center",
            alignItems: "center",
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
            Sing in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 56,
            borderRadius: 64,
            borderWidth: 1,
            borderColor: "rgba(242, 242, 242, 1.0)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              fontStyle: "normal",
              color: "#F2F2F2",
            }}
          >
            Sing up
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: 18,
            textAlign: "center",
            color: "#B3B3B3",
          }}
        >
          By sign in or sign up, you agree to our Terms of Service{"\n"} and
          Privac y Policy
        </Text>
      </View>
    </View>
  );
}
