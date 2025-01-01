import { StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";

import Habit from "../../components/Habit";
import { useSelector } from "react-redux";
import { selectHabits } from "../../store/slices/habitSlice";
import ImageBackgroundWrapper from "../../components/ImageBackgroundWrapper";

export default function Habits() {
  const habits = useSelector(selectHabits);

  const styles = StyleSheet.create({
    contentContainerStyles: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyles}>
      <ImageBackgroundWrapper>
        {habits.map((habit) => (
          <Habit key={habit.id} {...habit} />
        ))}
      </ImageBackgroundWrapper>
    </ScrollView>
  );
}
