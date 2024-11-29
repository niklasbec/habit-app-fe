import {
  StyleSheet,
  TextInput,
  FlatList,
  View,
  Text,
  LayoutAnimation,
} from "react-native";
import ShoppingListItem from "../components/Habit";
import { theme } from "../theme";
import { useEffect, useState } from "react";
import { getFromStorage, saveToStorage } from "../utils/storage";
import * as Haptics from "expo-haptics";

const storageKey = "shopping-list";

type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimeStamp?: number;
  lastUpdatedTimeStamp: number;
};

const initialList: ShoppingListItemType[] = [
  {
    id: "a",
    name: "Test",
    completedAtTimeStamp: undefined,
    lastUpdatedTimeStamp: Date.now(),
  },
];

export default function App() {
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialList);
  const [value, setValue] = useState("");

  const setShoppingListWithSideEffects = (data: ShoppingListItemType[]) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShoppingList(data);
    saveToStorage(storageKey, data);
  };

  useEffect(() => {
    const fetchInitial = async () => {
      const data = await getFromStorage(storageKey);
      if (data) {
        setShoppingListWithSideEffects(data);
      }
    };

    fetchInitial();
  }, []);

  const handleSubmit = () => {
    if (value) {
      const newItem = {
        id: new Date().toISOString(),
        name: value,
        lastUpdatedTimeStamp: Date.now(),
      };
      const newShoppingList = [...shoppingList, newItem];
      setShoppingListWithSideEffects(newShoppingList);
      setValue("");
    }
  };

  const handleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingListWithSideEffects(newShoppingList);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleToggleComplete = (id: string) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        if (item.completedAtTimeStamp) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        } else {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }

        return {
          ...item,
          completedAtTimeStamp: item.completedAtTimeStamp
            ? undefined
            : Date.now(),
          lastUpdatedTimeStamp: Date.now(),
        };
      }

      return item;
    });
    setShoppingListWithSideEffects(newShoppingList);
  };

  function orderShoppingList(shoppingList: ShoppingListItemType[]) {
    return shoppingList.sort((item1, item2) => {
      if (item1.completedAtTimeStamp && item2.completedAtTimeStamp) {
        return item2.completedAtTimeStamp - item1.completedAtTimeStamp;
      }

      if (item1.completedAtTimeStamp && !item2.completedAtTimeStamp) {
        return 1;
      }

      if (!item1.completedAtTimeStamp && item2.completedAtTimeStamp) {
        return -1;
      }

      if (!item1.completedAtTimeStamp && !item2.completedAtTimeStamp) {
        return item2.lastUpdatedTimeStamp - item1.lastUpdatedTimeStamp;
      }

      return 0;
    });
  }

  return (
    <FlatList
      ListHeaderComponent={
        <TextInput
          style={styles.textInput}
          placeholder="coffee"
          value={value}
          onChangeText={setValue}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      data={orderShoppingList(shoppingList)}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => {
        return (
          <ShoppingListItem
            name={item.name}
            isCompleted={Boolean(item.completedAtTimeStamp)}
            onToggleComplete={() => handleToggleComplete(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        );
      }}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>List empty</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 12,
  },
  contentContainer: {
    paddingTop: 24,
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
});