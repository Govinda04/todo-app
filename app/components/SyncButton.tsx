import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { deviceWidth } from "../helper/common.helper";

const SyncButton = () => {
  const _handleSyncNow = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.submitBtn} onPress={_handleSyncNow}>
        <Text style={styles.submitTxt}>Sync Now</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    position: "absolute",
    bottom: 20,
  },
  submitBtn: {
    width: deviceWidth * 0.7,
    backgroundColor: "rgba(47, 112, 192, 1)",
    padding: 20,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  submitTxt: {
    fontSize: 24,
    color: "#fff",
    textTransform: "uppercase",
    // width: 100,
    fontWeight: "semibold",
    letterSpacing: 1.3,
  },
});

export default SyncButton;
