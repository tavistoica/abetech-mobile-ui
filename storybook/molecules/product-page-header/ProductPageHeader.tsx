import React from "react";
import { View } from "react-native";
import { styles } from "./ProductPageHeader.styles";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import OsWrapper from "../../templates/OsWrapper/OsWrapper";

interface Props {
  placeholder: string;
  backColor: string;
  searchProducts: (args?: any) => void;
}

const ProductPageHeader: React.FC<Props> = ({
  placeholder,
  searchProducts,
  backColor,
}) => {
  return (
    <OsWrapper
      backColor={backColor}
      styleIOS={styles.center}
      styleAndroid={styles.center}
    >
      <SearchBar
        placeholder={placeholder}
        searchProducts={searchProducts}
        borderColor="blue"
        width="90%"
      />
    </OsWrapper>
  );
};

export default ProductPageHeader;
