import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import HomeScreen from "./screns/homescreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";
import GameScreen from "./screns/startgame";
import Colors from "./.expo/constant/color";
import Gameover from "./screns/gameover";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRound, SetguessRound] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Bold.ttf"),
    "openReg-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  function userNumberHandler(True) {
    setUserNumber(True);
    setGameOver(false);
  }
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  let screeen = <HomeScreen onPick={userNumberHandler} />;

  function gameOverHandler(numberofRounds) {
    setGameOver(true);
    SetguessRound(numberofRounds);
  }

  if (userNumber) {
    screeen = (
      <GameScreen onGameOver={gameOverHandler} userNumber={userNumber} />
    );
  }

  function startNewgame() {
    setUserNumber(null);
    SetguessRound(0);
  }

  if (gameOver && userNumber) {
    screeen = (
      <Gameover
        userNumber={userNumber}
        onStartGame={startNewgame}
        roundsNumber={guessRound}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.Primary700, Colors.accent500]}
      style={styles.container}
    >
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.bgcImg}
        style={styles.container}
        source={require("./assets/images/background.png")}
      >
        <SafeAreaView style={styles.container}>{screeen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgcImg: {
    opacity: 0.15,
  },
});
