import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { theme } from "../theme";
import ImageBackgroundWrapper from "./ImageBackgroundWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderWithContentContainerProps {
  children: React.ReactElement[];
  imageIndex?: number;
}

const MainContainer = ({
  children,
  imageIndex,
}: HeaderWithContentContainerProps) => {
  const { height, width } = useWindowDimensions();
  const { bottom, left, top } = useSafeAreaInsets();

  const styles = StyleSheet.create({
    header: {
      padding: 20,
    },
    body: {
      backgroundColor: theme.colorGlass,
      width,
      height: 400,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingBottom: bottom,
      flexGrow: 1,
      padding: 20,
    },
    container: {
      height: height,
      paddingHorizontal: left,
      paddingTop: top,
    },
  });

  return (
    <ImageBackgroundWrapper imageIndex={imageIndex}>
      <View style={styles.container}>
        <View style={styles.header}>{children[0]}</View>
        <View style={styles.body}>{children[1]}</View>
      </View>
    </ImageBackgroundWrapper>
  );
};

export default MainContainer;
