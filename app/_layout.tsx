import { Stack, useRouter } from "expo-router";
import { store } from "../store";
import { Provider } from "react-redux";
import React from "react";
import MenuControls from "../components/MenuControls";

const _layout = () => {
  const loggedIn = true;

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Dashboard",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login/login"
          options={{
            title: "Login",
            headerShown: false,
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
      {loggedIn && <MenuControls />}
    </Provider>
  );
};

export default _layout;
