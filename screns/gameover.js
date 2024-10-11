import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../components/title";
import Colors from "../.expo/constant/color";
import PryBtn from "../components/prybtn";

function Gameover({ roundsNumber, userNumber, onStartGame }) {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title>Game Over</Title>
        <View style={styles.imgCover}>
          <Image
            style={styles.img}
            source={require("../assets/images/success.png")}
          />
        </View>

        <Text style={styles.summary}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number
          <Text style={styles.highlight}> {userNumber}</Text> .
        </Text>
        <PryBtn onPress={onStartGame}>Start New Game</PryBtn>
      </View>
    </ScrollView>
  );
}
const devicewidth = Dimensions.get("window").width;
export default Gameover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // justifyContent: "center",
    alignItems: "center",
  },
  imgCover: {
    width: devicewidth < 350 ? 150 : 300,
    height: devicewidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.Primary800,
    margin: 32,
    borderRadius: devicewidth < 365 ? 75 : 150,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  summary: {
    fontFamily: "openReg-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 23,
  },
  highlight: {
    fontFamily: "open-sans",
    color: Colors.Primary500,
  },
});
