import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";
import { theme } from "../../theme";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <MainContainer imageIndex={1}>
        <View>
          <Title style={{ color: theme.colorBlack }}>Login</Title>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="username"
            value={username}
            onChangeText={setUsername}
            returnKeyType="done"
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
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
