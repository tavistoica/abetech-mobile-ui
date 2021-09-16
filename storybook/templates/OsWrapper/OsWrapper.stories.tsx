import { storiesOf } from "@storybook/react-native";
import { CenterView } from "../../helpers/CenterView";
import { action } from "@storybook/addon-actions";
import React from "react";
import Button from "../../atoms/Button/Button";
import OsWrapper from "./OsWrapper";

storiesOf("OsWrapper", module)
  .addDecorator((getStory) => <OsWrapper>{getStory()}</OsWrapper>)
  .add("render wrapper", () => (
    <Button
      title="Confirm"
      colorModifier="confirm"
      onPress={action("clicked-text")}
    />
  ));
