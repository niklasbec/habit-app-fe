import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../theme";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => (
            <Link href="/counter/history" asChild>
              <Pressable hitSlop={20}>
                <FontAwesome5
                  name="history"
                  size={24}
                  color={theme.colorGrey}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
