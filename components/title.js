import { StyleSheet, Text } from "react-native";
import Colors from "../.expo/constant/color";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: "80%",
  },
});
