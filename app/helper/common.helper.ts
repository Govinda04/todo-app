import { Dimensions } from "react-native";

export const getUniqueId = () => {
  return Date.now().toString() + Math.random().toString(36).substring(2, 9);
};

export const deviceHeight = Dimensions.get("screen").height;
export const deviceWidth = Dimensions.get("screen").width;
