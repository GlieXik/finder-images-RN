import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { Formik } from "formik";
export const Bar = ({ setQuery }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Formik
          initialValues={{ query: "" }}
          onSubmit={(values) => {
            setQuery(values.query);
          }}
        >
          {(props) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#000"
                value={props.values.query}
                onChangeText={props.handleChange("query")}
              ></TextInput>
              <Button title="+" onPress={props.handleSubmit}></Button>
            </View>
          )}
        </Formik>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    backgroundColor: "#22ff",
  },
  input: {
    margin: 15,
    padding: 15,
    height: 50,
    borderColor: "#2b2b8b",
    borderWidth: 1,
    backgroundColor: "#f8f8f8",
  },
});
