import { View, TextInput, StyleSheet } from "react-native";
import React, { useEffect } from "react";

interface TodoInputProps {
  value: string;
  handleItemTxtChange: (text: string) => void;
}

const TodoInput = ({ value = "", handleItemTxtChange }: TodoInputProps) => {
  const [text, onChangeText] = React.useState(value);

  useEffect(() => {
    handleItemTxtChange(text);
  }, [text]);
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter the todo item"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    borderColor: "#bdbdbd66",
  },
});

export default TodoInput;
