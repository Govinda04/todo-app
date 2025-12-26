import React, { type FC, type ReactNode } from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, borderWidth: 1 }}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Wrapper;
