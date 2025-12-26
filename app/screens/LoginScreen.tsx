import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Wrapper from "../components/Wrapper";
import { SCREENS } from "../constants";
import { deviceWidth } from "../helper/common.helper";
import { resetAndNavigate } from "../helper/navigation.helper";

const LoginScreen = () => {
  const [username, setUsername] = useState("Abcd");
  const [password, setPassword] = useState("123");

  const _handleSubmit = () => {
    if (username === "Abcd" && password === "123") {
      resetAndNavigate(SCREENS.HOME);
    } else {
      setUsername("");
      setPassword("");
      Alert.alert("Please enter valid Credentials!");
    }
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={styles.title}> Login </Text>

        <View>
          <View style={styles.txtField}>
            <Text style={styles.lbl}>Username</Text>
            <TextInput
              placeholder="Enter username"
              value={username}
              style={styles.textip}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.txtField}>
            <Text style={styles.lbl}>Password</Text>
            <TextInput
              placeholder="Enter Password"
              value={password}
              style={styles.textip}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.submitBtn} onPress={_handleSubmit}>
              <Text style={styles.submitTxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textip: {
    borderWidth: 0.5,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,

    fontSize: 24,
    marginVertical: 5,
    width: deviceWidth * 0.7,
    backgroundColor: "rgba(236, 238, 224, 1)",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "rgba(47, 112, 192, 1)",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  txtField: {
    marginTop: 15,
  },
  lbl: {
    color: "rgba(47, 112, 192, 1)",
    marginLeft: 2,
    fontSize: 18,
    fontWeight: "semibold",
    letterSpacing: 1,
  },
  submitBtn: {
    width: deviceWidth * 0.7,
    backgroundColor: "rgba(47, 112, 192, 1)",
    padding: 20,
    paddingVertical: 15,
    marginTop: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  submitTxt: {
    fontSize: 24,
    color: "#fff",
    textTransform: "uppercase",
    width: 100,
    fontWeight: "semibold",
    letterSpacing: 1.3,
  },
});

export default LoginScreen;
