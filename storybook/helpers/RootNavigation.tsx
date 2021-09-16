import { NavigationContainerRef } from "@react-navigation/native";
import * as React from "react";

//  @ts-ignore
export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}
