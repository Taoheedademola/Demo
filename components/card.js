import { StyleSheet, View } from "react-native";
import Colors from "../.expo/constant/color";

function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 10,
    backgroundColor: Colors.Primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 7, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
  },
});
