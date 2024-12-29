import { StyleSheet, ImageBackground, useWindowDimensions } from "react-native";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  style?: any;
  imageIndex?: number;
}

const ImageBackgroundWrapper = ({
  children,
  style,
  imageIndex = 0,
}: TitleProps) => {
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      width,
      height,
    },
  });

  const images = [require("../assets/gradient-dark.png")];

  return (
    <ImageBackground
      source={images[imageIndex]}
      style={[styles.container, style]}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

export default ImageBackgroundWrapper;
