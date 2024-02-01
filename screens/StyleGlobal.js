import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // -------------------------------Text Footer---------------------------------------
  TFooter: {
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "center",
    color: "#B3B3B3",
    paddingBottom: "5%",
  },
  // -------------------------------Customize Buttons---------------------------------------
  Buttons: {
    width: "100%",
    height: 56,
    borderRadius: 64,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
  },
  // -------------------------------CodeOTC Screen-----------------------------------------

  // Customize input
  Border: {
    width: 52,
    height: 72,
    borderRadius: 8,
    backgroundColor: "#261D08",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(252, 196, 52, 1.0)",
  },
  TextInput: {
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "normal",
    color: "#F2F2F2",
  },
});
export default styles;