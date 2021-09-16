import { storiesOf } from "@storybook/react-native";
import { CenterView } from "../../helpers/CenterView";
import { action } from "@storybook/addon-actions";
import React from "react";
import Button from "./Button";

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("confirm", () => (
    <Button
      title="Confirm"
      colorModifier="confirm"
      onPress={action("clicked-text")}
    />
  ))
  .add("cancel", () => <Button title="Cancel" colorModifier="cancel" />)
  .add("complementary", () => (
    <Button title="Complementary button" colorModifier="complementary" />
  ))
  .add("underlined", () => (
    <Button title="This is a subtle button" colorModifier="underlined" />
  ))
  .add("disabled", () => <Button title="Confirm" colorModifier="confirm" />);
