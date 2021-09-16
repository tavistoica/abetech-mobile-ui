import { storiesOf } from "@storybook/react-native";
import { CenterView } from "../../helpers/CenterView";
import React from "react";
import ProductPageHeader from "./ProductPageHeader";

const props = {
  searchProducts: () => console.log("pressed search"),
  borderColor: "blue",
  placeholder: "Search products...",
  backColor: "black",
};

storiesOf("ProductPageHeader", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <ProductPageHeader {...props} />);
