import { storiesOf } from "@storybook/react-native";
import { CenterView } from "../../helpers/CenterView";
import { action } from "@storybook/addon-actions";
import React from "react";
import BottomMenu from "./BottomMenu";

const props = {
  backgroundColor: "black",
  iconColor: "white",
};

storiesOf("BottomMenu", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default menu", () => <BottomMenu {...props} />);
