import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
export const Gallery = ({ data }) => {
  console.log("====================================");
  console.log("gallety");
  console.log("====================================");

  const handleClick = (item) => {
    Alert.alert(`${item.views} - переглядів`);
  };
  return (
    <SafeAreaProvider style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleClick(item)}>
            <Image
              style={styles.item}
              source={{
                uri: `${item.webformatURL}`,
              }}
            />
          </Pressable>
        )}
      />
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 8,

    alignItems: "center",
  },
  item: {
    width: 350,
    height: 300,
    margin: 10,
  },
});
