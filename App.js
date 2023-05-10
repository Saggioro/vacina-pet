import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import backgroundImage from "./assets/background.png";
import logo from "./assets/logo.png";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-Black": require("./assets/fonts/PlayfairDisplay-Black.ttf"),
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.container}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>Vacina PET</Text>
          <TouchableOpacity style={styles.button}>
            <Text>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Crie sua conta</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: "8rem",
    height: "8rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 900,
    fontFamily: "PlayfairDisplay-Black",
    marginBottom: 60,
  },
  button: {
    width: "45%",
    height: "2.5rem",
    backgroundColor: "#fff",
    marginBottom: 12,
    borderRadius: 8,
    border: "1px solid #8C6F4A",
    justifyContent: "center",
    alignItems: "center",
  },
});
