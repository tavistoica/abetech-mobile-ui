import React from "react";
import { TouchableOpacity, Text, TextStyle, ViewStyle } from "react-native";
import { styles } from "./Button.style";

interface Props {
  title: string;
  onPress?: (arg?: any) => void;
  colorModifier?:
    | "confirm"
    | "cancel"
    | "complementary"
    | "success"
    | "underlined";
  disabled?: boolean;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<Props> = (props) => {
  const appliedStyles: ViewStyle[] = [styles.button];

  if (props.disabled) appliedStyles.push(styles.disabled);
  if (props.colorModifier) appliedStyles.push(styles[props.colorModifier]);

  const textStyles: TextStyle[] = [styles.text];

  switch (props.colorModifier) {
    case "cancel":
      textStyles.push(styles.textColorPrimary);
      break;
    case "underlined":
      textStyles.push(styles.textColorPrimary);
      textStyles.push(styles.textStyleUnderlined);
      break;
  }
  if (props.textStyle) {
    textStyles.push(props.textStyle);
  }

  return (
    <TouchableOpacity
      style={appliedStyles}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={textStyles}>{props.title}</Text>
    </TouchableOpacity>
  );
};

CustomButton.displayName = "Button";

export default CustomButton;
