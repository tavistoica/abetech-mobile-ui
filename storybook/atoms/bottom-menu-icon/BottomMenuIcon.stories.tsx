import { storiesOf } from "@storybook/react-native";
import { CenterView } from "../../helpers/CenterView";
import { action } from "@storybook/addon-actions";
import React from "react";
import BottomMenuIcon from "./BottomMenuIcon";

storiesOf("BottomMenuIcon", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("heart", () => (
    <BottomMenuIcon
      iconColor="blue"
      route={"favs"}
      size={26}
      icon={"heart-outline"}
    />
  ))
  .add("compass", () => (
    <BottomMenuIcon
      iconColor="blue"
      route={"discoveryPage"}
      size={45}
      icon={"compass-outline"}
    />
  ));
