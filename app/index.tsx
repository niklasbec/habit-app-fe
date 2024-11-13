import { StyleSheet, TextInput, View } from "react-native";
import ShoppingListItem from "../components/ShoppingListItem";
import { theme } from "../theme";
import { useState } from "react";
// import { Link } from "expo-router";

type ShoppingListItemType = {
  id: string;
  name: string;
};

const initialList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Cookies" },
];

export default function App() {
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialList);
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value) {
      const newItem = { id: new Date().toISOString(), name: value };
      setShoppingList([...shoppingList, newItem]);
      setValue("");
    }
  };
  return (
    <View style={styles.container}>
      {/* <Link
        href="/test"
        style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}
      >
        Click me
      </Link> */}
      <TextInput
        style={styles.textInput}
        placeholder="coffee"
        value={value}
        onChangeText={setValue}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => {
        return <ShoppingListItem key={item.id} name={item.name} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
  },
});
