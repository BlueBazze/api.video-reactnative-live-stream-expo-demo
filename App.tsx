import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Demo from "./src/Demo";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} style="light" />
      <Demo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
