import React from "react";
import OsWrapper from "../../templates/OsWrapper/OsWrapper";
import BottomMenuElement from "../../atoms/bottom-menu-icon/BottomMenuIcon";
import { styles } from "./BottomMenu.style";

interface Props {
  backgroundColor: string;
  iconColor: string;
}

const BottomMenu: React.FC<Props> = ({ backgroundColor, iconColor }) => (
  <OsWrapper
    styleIOS={styles.headerIos}
    styleAndroid={styles.headerAndroid}
    backColor={backgroundColor}
  >
    <BottomMenuElement
      iconColor={iconColor}
      route={"product_list"}
      size={26}
      icon={"search-outline"}
    />
    <BottomMenuElement
      iconColor={iconColor}
      route={"favs"}
      size={26}
      icon={"heart-outline"}
    />
    <BottomMenuElement
      iconColor={iconColor}
      route={"discoveryPage"}
      size={45}
      icon={"compass-outline"}
    />
    <BottomMenuElement
      iconColor={iconColor}
      route={"mycart"}
      size={26}
      icon={"cart-outline"}
    />
    <BottomMenuElement
      iconColor={iconColor}
      route={"profile"}
      size={26}
      icon={"person-circle-outline"}
    />
  </OsWrapper>
);

export default BottomMenu;
