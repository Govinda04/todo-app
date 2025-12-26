import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SCREENS } from "../constants";
import { navigate } from "../helper/navigation.helper";

const SplashScreen = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(SCREENS.LOGIN);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
  },
});

export default SplashScreen;
