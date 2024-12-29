import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { Image } from "expo-image";
import { theme } from "../theme";
import * as Haptics from "expo-haptics";
import Animated, { FadeOut, Easing } from "react-native-reanimated";

const emojis = [
  {
    key: "sad",
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disappointed%20Face.png",
  },
  {
    key: "mid",
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Neutral%20Face.png",
  },
  {
    key: "good",
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Slightly%20Smiling%20Face.png",
  },
  {
    key: "happy",
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Squinting%20Face.png",
  },
];

const MoodSurvey = () => {
  const [hideMoodSurvey, setHideMoodSurvey] = useState<boolean>(false);

  const handleMoodPick = (e: GestureResponderEvent) => {
    console.log(e.nativeEvent.target);
    setTimeout(() => {
      setHideMoodSurvey(true);
    }, 5000);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  if (hideMoodSurvey) return null;

  return (
    <Animated.View
      exiting={FadeOut.duration(500).easing(Easing.inOut(Easing.quad))}
    >
      <Text style={styles.headingText}>How do you feel today?</Text>
      <View style={styles.moodSurveyContainer}>
        {emojis.map((emoji) => {
          return (
            <TouchableOpacity
              hitSlop={5}
              onPress={(e) => handleMoodPick(e)}
              key={emoji.key}
              style={styles.emojiContainer}
            >
              <Image style={{ width: 32, height: 32 }} source={emoji.url} />
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );
};
export default MoodSurvey;

const styles = StyleSheet.create({
  headingText: {
    color: theme.colorWhite,
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  moodSurveyContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emojiContainer: {
    backgroundColor: theme.colorGlassHeavy,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
