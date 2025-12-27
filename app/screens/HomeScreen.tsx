import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Wrapper from "../components/Wrapper";
import { deviceWidth } from "../helper/common.helper";

// const API = "https://reactnative.dev/movies.json";
// const API = "http://192.168.0.175:8080/api/notes";
const API = "http://localhost:8080/api/notes";

//  eas build --platform android --profile apk_release
// eas update --channel apk_release --message "ip updated"

const HomeScreen = () => {
  const [notesData, setNotesData] = useState("This is test");

  const [ip, setip] = useState("");

  const getApi = (ip: string) => `http://${ip}:8080/api/notes`;

  const getNotesFromApi = (ip: string = "localhost") => {
    return fetch(getApi(ip))
      .then((response) => {
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((json) => json)
      .catch((error) => {
        console.error(error);
        // setNotesData("Error in Request" + error);
        return "Error in Request" + error;
      });
  };

  const _callApi = useCallback(async () => {
    try {
      const _data = await getNotesFromApi(ip);
      setNotesData("Hello \n" + JSON.stringify(_data?.content));
    } catch (err) {
      Alert.alert(`${err}`);
    }
  }, [ip]);

  useEffect(() => {
    if (ip) {
      _callApi();
    }
  }, [ip]);
  return (
    <Wrapper>
      {/* <TodoList /> */}
      <View>
        <Text>{notesData}</Text>
      </View>
      <Button title="Fetch" onPress={_callApi} />
      {/* <SyncButton /> */}
      <TextInput
        placeholder="Enter Ip add"
        value={ip}
        style={styles.textip}
        onChangeText={setip}
      />
      <TouchableOpacity onPress={_callApi}>
        <Text>Fetch</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
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
});

export default HomeScreen;
