import { Text, StyleSheet } from "react-native";
import { theme } from "../theme";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: theme.colorLightest,
  },
});
