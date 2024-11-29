import {
  StyleSheet,
  TextInput,
  FlatList,
  View,
  Text,
  LayoutAnimation,
} from "react-native";

import { theme } from "../theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Habit from "../components/Habit";

export default function App() {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colorDarkest,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: insets.top + 50,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left + 20,
      paddingRight: insets.right + 20,
    },
  });

  return (
    <View style={styles.container}>
      <Habit />
    </View>
  );
}
