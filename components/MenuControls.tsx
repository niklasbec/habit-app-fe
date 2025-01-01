import React from "react";
import { View, StyleSheet, useWindowDimensions, Pressable } from "react-native";
import { theme } from "../theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

const MenuControls = () => {
  const { width } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const router = useRouter();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colorDarkWhite,
      width: width / 1.8,
      bottom: bottom + 15,
      left: (width - width / 1.8) / 2,
      right: 0,
      position: "absolute",
      borderRadius: 40,
      padding: 20,
      paddingHorizontal: 30,
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.navigate("/")} hitSlop={20}>
        <FontAwesome
          style={{ color: theme.colorLightBlack }}
          name="home"
          size={32}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("/login/login")} hitSlop={20}>
        <FontAwesome5
          name="user-friends"
          size={32}
          style={{ color: theme.colorLightBlack }}
        />
      </Pressable>
      <Pressable onPress={() => router.navigate("/habits/create")} hitSlop={20}>
        <AntDesign
          style={{ color: theme.colorLightBlack }}
          name="pluscircle"
          size={32}
        />
      </Pressable>
    </View>
  );
};

export default MenuControls;
