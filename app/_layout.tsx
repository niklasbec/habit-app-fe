import { Stack, Link, useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { theme } from "../theme";

const _layout = () => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Habits",
          headerLargeTitle: true,
          headerTintColor: theme.colorLightest,
          headerStyle: styles.header,
          headerRight: () => (
            <Pressable
              onPress={() => router.navigate("/habits/create")}
              hitSlop={20}
            >
              <FontAwesome5
                style={{ color: theme.colorLightest }}
                name="plus"
                size={24}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="habits/create"
        options={{
          title: "Create new habit",
          presentation: "modal",
          headerShown: false,
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colorDarkest,
  },
});

export default _layout;
