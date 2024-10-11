import { StyleSheet, Text, View } from "react-native";
import Colors from "../../.expo/constant/color";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={style.listItem}>
      <Text style={style.listItemTetx}>#{roundNumber}</Text>
      <Text style={style.listItemTetx}>{guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const style = StyleSheet.create({
  listItem: {
    borderColor: Colors.Primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  listItemTetx: {
    fontFamily: "openReg-sans",
  },
});
