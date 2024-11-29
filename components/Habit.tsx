import { StyleSheet, View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { theme } from "../theme";

const Habit = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gym</Text>
      <View style={styles.checkboxes}>
        <Checkbox
          style={styles.checkbox}
          color={theme.colorLight}
          value={checked}
          onValueChange={(newValue) => setChecked(newValue)}
        />
      </View>
    </View>
  );
};

export default Habit;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.colorLightest,
    borderRadius: 5,
    padding: 10,
    display: "flex",
    width: "100%",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: theme.colorLightest,
  },
  checkbox: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  checkboxes: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
