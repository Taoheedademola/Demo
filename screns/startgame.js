import {
  Alert,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Title from "../components/title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/number";
import PryBtn from "../components/prybtn";
import Card from "../components/card";
import Colors from "../.expo/constant/color";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogitem";

function generateRandomNumber(max, min, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBound = 1;
let maxBound = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurentGuess] = useState(initialGuess);
  const [guessRound, SetGuessRound] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      {
        onGameOver(guessRound.length);
      }
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    (minBound = 1), (maxBound = 100);
  }, []);
  function nextGuess(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie!!", "You Know that this is a lie", [
        { text: "Cancel", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess + 1;
    }
    const newrndNum = generateRandomNumber(minBound, maxBound, currentGuess);
    setCurentGuess(newrndNum);
    SetGuessRound((previousRnd) => [newrndNum, ...previousRnd]);
  }

  const guessRoundListlength = guessRound.length;
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Title>Opponent's guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <Text style={styles.Txt}>Higher or lower?</Text>
          <View style={styles.btnsHolder}>
            <View style={styles.btnHolder}>
              <PryBtn onPress={nextGuess.bind(this, "lower")}>
                <Ionicons name="remove" size={24} color="white" />
              </PryBtn>
            </View>
            <View style={styles.btnHolder}>
              <PryBtn onPress={nextGuess.bind(this, "higher")}>
                <Ionicons name="add" size={24} color="white" />
              </PryBtn>
            </View>
          </View>
        </Card>
        <View style={styles.listContainer}>
          {/* {guessRound.map((guessRound) => (
          // <Text key={guessRound}>{guessRound}</Text>
        ))} */}

          <FlatList
            data={guessRound}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRoundListlength - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const devicewidth = Dimensions.get("screen").width;
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: devicewidth < 350 ? 40 : 50,
    padding: 24,
    alignItems: "center",
  },
  btnHolder: {
    flex: 1,
  },
  btnsHolder: {
    flexDirection: "row",
  },
  Txt: {
    fontSize: 24,
    color: Colors.accent500,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

// import {
//   Alert,
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableWithoutFeedback,
//   View,
//   useWindowDimensions,
// } from "react-native";
// import Title from "../components/title";
// import { useEffect, useState } from "react";
// import NumberContainer from "../components/game/number";
// import PryBtn from "../components/prybtn";
// import Card from "../components/card";
// import Colors from "../.expo/constant/color";
// import { Ionicons } from "@expo/vector-icons";
// import GuessLogItem from "../components/game/GuessLogitem";

// function generateRandomNumber(max, min, exclude) {
//   const rndNum = Math.floor(Math.random() * (max - min)) + min;
//   if (rndNum === exclude) {
//     return generateRandomNumber(min, max, exclude);
//   } else {
//     return rndNum;
//   }
// }

// let minBound = 1;
// let maxBound = 100;

// function GameScreen({ userNumber, onGameOver }) {
//   const { width, height } = useWindowDimensions(); // Detect window dimensions
//   const isLandscape = width > height; // Determine if the device is in landscape

//   const initialGuess = generateRandomNumber(1, 100, userNumber);
//   const [currentGuess, setCurentGuess] = useState(initialGuess);
//   const [guessRound, SetGuessRound] = useState([initialGuess]);

//   useEffect(() => {
//     if (currentGuess === userNumber) {
//       onGameOver(guessRound.length);
//     }
//   }, [currentGuess, userNumber, onGameOver]);

//   useEffect(() => {
//     minBound = 1;
//     maxBound = 100;
//   }, []);

//   function nextGuess(direction) {
//     if (
//       (direction === "lower" && currentGuess < userNumber) ||
//       (direction === "higher" && currentGuess > userNumber)
//     ) {
//       Alert.alert("Don't lie!!", "You Know that this is a lie", [
//         { text: "Cancel", style: "cancel" },
//       ]);
//       return;
//     }

//     if (direction === "lower") {
//       maxBound = currentGuess;
//     } else {
//       minBound = currentGuess + 1;
//     }
//     const newrndNum = generateRandomNumber(minBound, maxBound, currentGuess);
//     setCurentGuess(newrndNum);
//     SetGuessRound((previousRnd) => [newrndNum, ...previousRnd]);
//   }

//   const guessRoundListlength = guessRound.length;

//   return (
//     <TouchableWithoutFeedback style={{ flex: 1 }}>
//       <View style={styles.screen}>
//         <Title>Opponent's Guess</Title>
//         <NumberContainer>{currentGuess}</NumberContainer>

//         <View
//           style={[
//             styles.controlsContainer,
//             isLandscape && styles.controlsLandscape,
//           ]}
//         >
//           <View style={styles.btnHolder}>
//             <PryBtn onPress={nextGuess.bind(this, "lower")}>
//               <Ionicons name="remove" size={24} color="white" />
//             </PryBtn>
//           </View>
//           <View style={styles.btnHolder}>
//             <PryBtn onPress={nextGuess.bind(this, "higher")}>
//               <Ionicons name="add" size={24} color="white" />
//             </PryBtn>
//           </View>
//         </View>

//         <View style={[styles.listContainer, isLandscape && { width: "60%" }]}>
//           <FlatList
//             data={guessRound}
//             renderItem={(itemData) => (
//               <GuessLogItem
//                 roundNumber={guessRoundListlength - itemData.index}
//                 guess={itemData.item}
//               />
//             )}
//             keyExtractor={(item, index) => index.toString()} // Use index as key
//           />
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// export default GameScreen;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     padding: 24,
//     alignItems: "center",
//   },
//   controlsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   controlsLandscape: {
//     flexDirection: "row", // Make controls side by side in landscape
//     justifyContent: "center",
//     width: "80%", // Adjust width in landscape mode
//   },
//   btnHolder: {
//     flex: 1,
//     marginHorizontal: 10, // Add some space between buttons
//   },
//   listContainer: {
//     flex: 1,
//     width: "100%", // Full width in portrait
//     padding: 16,
//   },
// });
