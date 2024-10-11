import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../.expo/constant/color";

function PryBtn({ children, onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.innercontainer]
            : styles.innercontainer
        }
        android_ripple={{ color: Colors.Primary600 }}
        onPress={onPress}
      >
        <Text style={styles.ButtonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 4,
    overflow: "hidden",
    borderRadius: 29,
  },
  innercontainer: {
    backgroundColor: Colors.Primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  ButtonText: {
    textAlign: "center",
    color: "#fff",
  },
  pressed: {
    opacity: 0.65,
  },
});

export default PryBtn;
