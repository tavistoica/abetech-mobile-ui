import { storiesOf } from "@storybook/react-native";
import { CenterView } from "../../helpers/CenterView";
import React from "react";
import SearchBar from "./SearchBar";

const props = {
  searchProducts: () => console.log("pressed search"),
  borderColor: "blue",
  placeholder: "Search products...",
  width: "100%",
};

storiesOf("SearchBar", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <SearchBar {...props} />);
