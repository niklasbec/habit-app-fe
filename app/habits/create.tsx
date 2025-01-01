import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { theme } from "../../theme";
import { useRouter } from "expo-router";
import Title from "../../components/Title";
import { useDispatch } from "react-redux";
import { addHabit } from "../../store/slices/habitSlice";
import ImageBackgroundWrapper from "../../components/ImageBackgroundWrapper";

const Create = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (value) {
      const newItem = {
        id: new Date().toISOString(),
        title: value,
        history: {},
      };
      dispatch(addHabit(newItem));
      router.back();
    }
  };

  return (
    <ImageBackgroundWrapper style={styles.container}>
      <Title>Create new habit</Title>
      <TextInput
        style={styles.textInput}
        placeholder="coffee"
        value={value}
        onChangeText={setValue}
        returnKeyType="done"
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </Pressable>
      </View>
    </ImageBackgroundWrapper>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: theme.colorWhite,
    borderRadius: 5,
    width: "45%",
  },
  buttonText: {
    color: theme.colorDarkest,
    fontSize: 18,
    fontWeight: "500",
  },
  textInput: {
    borderColor: theme.colorLight,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
});
