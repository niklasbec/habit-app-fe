import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../../theme";
import { useRouter } from "expo-router";
import Title from "../../components/Title";

const Create = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Title title="Create new habit" />
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorDarkest,
    flex: 1,
    padding: 30,
    justifyContent: "space-between",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: theme.colorLightest,
    borderRadius: 5,
    width: "45%",
  },
  buttonText: {
    color: theme.colorDarkest,
    fontSize: 18,
    fontWeight: "500",
  },
});
