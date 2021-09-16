import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "./SearchBar.style";

interface Props {
  searchProducts: (args?: any) => void;
  borderColor: string;
  placeholder: string;
  width: string;
}

const Header: React.FC<Props> = ({
  searchProducts,
  borderColor,
  placeholder,
  width,
}) => {
  const [searchText, setSearchText] = useState<string>("");

  const searchProduct = () => {
    searchProducts(searchText);
  };

  return (
    <TextInput
      onChangeText={(value) => setSearchText(value)}
      autoFocus={false}
      onSubmitEditing={() => searchProduct()}
      placeholder={placeholder}
      placeholderTextColor="grey"
      autoCorrect={false}
      autoCapitalize="none"
      style={[styles.inputTxt, { borderColor: borderColor, width }]}
    />
  );
};

export default Header;
