import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import PryBtn from "../components/prybtn";
import { useState } from "react";
import Colors from "../.expo/constant/color";
import Title from "../components/title";
import Card from "../components/card";

function HomeScreen({ onPick }) {
  const [enteredValue, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();
  function inputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }
  function Confirminput() {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    onPick(chosenNumber);
  }

  const marginTop = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView behavior="position" style={styles.screen}>
        <View style={[styles.screenCont, { marginTop: marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <Text style={styles.Txt}>Enter a Number</Text>
            <TextInput
              maxLength={2}
              autoCapitalize="none"
              keyboardType="number-pad"
              style={styles.input}
              value={enteredValue}
              onChangeText={inputHandler}
            />
            <View style={styles.buttons}>
              <View style={styles.button}>
                <PryBtn onPress={resetInputHandler}>Reset</PryBtn>
              </View>
              <View style={styles.button}>
                <PryBtn onPress={Confirminput}>Confirm</PryBtn>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenCont: {
    flex: 1,
    // marginTop: deviceWidth < 380 ? 30 : 100,
    alignItems: "center",
  },

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
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 60,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    padding: 10,
  },
  Txt: {
    fontSize: 24,
    color: Colors.accent500,
    fontWeight: "bold",
  },
});

export default HomeScreen;
