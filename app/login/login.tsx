import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";
import { theme } from "../../theme";

export default function Login() {
  return (
    <View>
      <MainContainer imageIndex={1}>
        <View>
          <Title style={{ color: theme.colorBlack }}>Login</Title>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="coffee"
            value={value}
            onChangeText={setValue}
            returnKeyType="done"
          />
          <TextInput
            style={styles.textInput}
            placeholder="coffee"
            value={value}
            onChangeText={setValue}
            returnKeyType="done"
          />
        </View>
      </MainContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {},
});
