import { StyleSheet } from "react-native";
import FontSizes from "../../helpers/FontSizes";
import Colors from "../../helpers/Colors";

export const styles = StyleSheet.create({
  button: {
    minHeight: 40,
    minWidth: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: FontSizes.default,
    paddingHorizontal: 20,
    color: "white",
  },
  textColorPrimary: {
    color: Colors.primary,
  },
  textStyleUnderlined: {
    textDecorationLine: "underline",
  },
  disabled: {
    opacity: 0.5,
  },
  confirm: {
    backgroundColor: Colors.primary,
  },
  cancel: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  outline: {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  complementary: {
    backgroundColor: Colors.complementary,
  },
  success: {
    backgroundColor: Colors.success,
  },
  underlined: {
    borderWidth: 0,
  },
});
