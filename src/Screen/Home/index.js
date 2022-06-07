import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  navigation,
} from "react-native";

const image = require("../../../img/bg_img.png");

const Home = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.img_bg}>
      <Image
        source={require("../../../img/logo.png")}
        style={styles.logo}
      ></Image>
      <Image
        style={styles.img_welcome}
        source={require("../../../img/welcome.png")}
      ></Image>
      <Image
        style={styles.img_ytb}
        source={require("../../../img/ytb_img.png")}
      ></Image>
      <Image
        style={styles.txt_scan}
        source={require("../../../img/text_scan.png")}
      ></Image>
      <TouchableOpacity style={styles.log}
        onPress={() => props.navigation.navigate("Information")}
      >
        <Image
          style={styles.log_in}
          source={require("../../../img/log_in.png")}
        ></Image>
      </TouchableOpacity>

      <Image style={styles.btn} source={require("../../../img/img_btn.png")} />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img_bg: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  logo: {
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 120,
    top: 20,
  },
  img_welcome: {
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    width: 300,
    height: 130,
    top: 10,
  },

  img_ytb: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    width: 330,
    height: 180,
    top: 250,
    left: 46,
  },

  txt_scan: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    width: 300,
    height: 300,
    marginTop: "66%",
  },

  log_in: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    height: 100,
    top: "90%",
  },
  btn: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    height: 40,
    top:560,
    end: 1,
  },
  log:{
    marginTop:"70%"
  }
});

export default Home;
