import { Text, StyleSheet } from "react-native";
import { theme } from "../theme";
import React from "react";

interface TitleProps {
  children: string;
  style?: any;
}

const Title = ({ children, style }: TitleProps) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: theme.colorLightest,
  },
});
