import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsnyc";
import { isDevice } from "expo-device";
import * as Notifications from "expo-notifications";
import { SchedulableTriggerInputTypes } from "expo-notifications";
import ConfettiCannon from "react-native-confetti-cannon";
import { useRef } from "react";

export default function CounterScreen() {
  const { width } = useWindowDimensions();
  const confettiRef = useRef<any>(null);
  const scheduleNotification = async () => {
    const result = await registerForPushNotificationsAsync();
    confettiRef?.current?.start();
    if (result === "granted") {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Confetti",
        },
        trigger: {
          type: SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 5,
        },
      });
    } else {
      if (isDevice) {
        Alert.alert("Enable Notifications in settings");
      }
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={scheduleNotification}
      >
        <Text style={styles.buttonText}>I did the thing</Text>
      </TouchableOpacity>
      <ConfettiCannon
        ref={confettiRef}
        count={50}
        autoStart={false}
        origin={{
          x: width / 2,
          y: -20,
        }}
        fadeOut
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    letterSpacing: 1,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
