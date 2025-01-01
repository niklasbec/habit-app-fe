import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { useEffect } from "react";
import { theme } from "../theme";
import MoodSurvey from "../components/MoodSurvey";
import MainContainer from "../components/MainContainer";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserHabits, selectHabits } from "../store/slices/habitSlice";
import Habit from "../components/Habit";
import { AppDispatch } from "../store";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const habits = useSelector(selectHabits);

  const styles = StyleSheet.create({
    greetingsBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    greeting: {
      fontSize: 22,
      color: theme.colorWhite,
    },
    dateContainer: {
      marginTop: 20,
    },
    date: {
      fontSize: 32,
      color: theme.colorWhite,
    },
  });

  useEffect(() => {
    dispatch(fetchUserHabits(2));
  }, [dispatch]);

  const date = format(new Date(), "MMMM d");
  const day = format(new Date(), "eeee");

  return (
    <View>
      <MainContainer>
        <View>
          <View style={styles.greetingsBox}>
            <Text style={styles.greeting}>Hello, Niklas</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{day}</Text>
            <Text style={styles.date}>{date}</Text>
            <MoodSurvey />
          </View>
        </View>
        <ScrollView>
          {habits.map((habit) => (
            <Habit daily key={habit.id} {...habit} />
          ))}
        </ScrollView>
      </MainContainer>
    </View>
  );
}
