import { StyleSheet, View, Text, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import { theme } from "../theme";
import * as Haptics from "expo-haptics";
import React from "react";
import { checkOffHabit, Habit as HabitType } from "../store/slices/habitSlice";
import { useDispatch } from "react-redux";
import { formatDate } from "date-fns";

interface HabitProps extends HabitType {
  daily?: boolean;
}

const Habit = ({ title, history, id, daily }: HabitProps) => {
  const dispatch = useDispatch();
  const dateFormat = "dd-MM-yyyy";
  const checkboxData = {
    date: formatDate(new Date(), dateFormat),
  };

  function handleValueChecked(newVal: boolean, date: string) {
    if (newVal) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }

    dispatch(checkOffHabit({ habitId: id, date }));
  }

  const buttonText = history[checkboxData.date]?.checked
    ? "Marked as done"
    : "Mark as done";

  const styles = StyleSheet.create({
    container: {
      borderRadius: 5,
      padding: 10,
      width: "100%",
    },
    content: {
      display: "flex",
      flexDirection: daily ? "row" : "column",
      justifyContent: daily ? "space-between" : "flex-start",
      alignItems: "center",
    },
    title: {
      fontSize: 18,
      color: theme.colorWhite,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderRadius: 5,
    },
    checkboxes: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
    },
    checkboxContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: 180,
      padding: 8,
      backgroundColor: theme.colorGlassHeavy,
      borderRadius: 15,
    },
    checkboxText: {
      color: theme.colorWhite,
    },
    divider: {
      backgroundColor: theme.colorDarkWhite,
      width: "100%",
      height: 2,
      marginTop: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.checkboxes}>
          <Pressable
            onPress={() =>
              handleValueChecked(
                !history[checkboxData.date]?.checked,
                checkboxData.date
              )
            }
            style={styles.checkboxContainer}
          >
            <Text style={styles.checkboxText}>{buttonText}</Text>
            <Checkbox
              style={styles.checkbox}
              color={theme.colorWhite}
              value={history[checkboxData.date]?.checked}
              onValueChange={(newVal) =>
                handleValueChecked(newVal, checkboxData.date)
              }
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default Habit;
