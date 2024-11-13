import { StyleSheet, Text, View, TouchableOpacity, Alert, Pressable } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

interface ShoppingListItemProps {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
}

export default function ShoppingListItem({
  name,
  isCompleted = false,
  onDelete,
  onToggleComplete,
}: ShoppingListItemProps) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It will be gone forever",
      [
        {
          text: "Yes",
          onPress: () => onDelete(),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <Pressable
      onPress={onToggleComplete}
      style={[styles.itemContainer, isCompleted && styles.completedContainer]}
    >
      <View style={styles.row}>
        <Entypo name={isCompleted ? "check" : "circle"} size={24} color={isCompleted ? theme.colorGrey : theme.colorCerulean} />
        <Text numberOfLines={1} style={[styles.itemText, isCompleted && styles.completedText]}>
          {name}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, isCompleted && styles.completedButton]}
        onPress={handleDelete}
        activeOpacity={0.7}
      >
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  completedButton: {},
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200,
    flex: 1,
   },
  button: { padding: 8, borderRadius: 6 },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    flex: 1,
  }
});
