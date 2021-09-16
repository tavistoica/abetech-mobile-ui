import React from "react";
import { TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import * as RootNavigation from "../../helpers/RootNavigation";
import { styles } from "./BottomMenuIcon.styles";

interface Props {
  iconColor: string;
  route: string;
  size: number;
  icon: string;
}

const BottomMenuElement = ({ iconColor, route, size, icon }: Props) => {
  return (
    <TouchableOpacity
      style={styles.drawerItem}
      onPress={async () => {
        RootNavigation.navigate(route);
      }}
    >
      <IonIcons name={icon} color={iconColor} size={size} />
    </TouchableOpacity>
  );
};

export default BottomMenuElement;
