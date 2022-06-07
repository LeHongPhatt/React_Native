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
        style={styles.error_img}
        source={require("../../../img/error_img.png")}
      ></Image>
      <Image style={styles.txt_id}
      source={require("../../../img/txt_id.png")}>
          
      </Image>
      <Image style={styles.scan_img}
      source={require("../../../img/scan_img.png")}>
          
      </Image>
      <Image
        style={styles.phone_error}
        source={require("../../../img/phone_error.png")}
      ></Image>
      <Image
        style={styles.txt_scan}
        source={require("../../../img/text_scan.png")}
      ></Image>
      <Image
        style={styles.log_in}
        source={require("../../../img/log_in.png")}
      ></Image>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Seclect")}
      >
        <Image
          style={styles.btn}
          source={require("../../../img/img_btn.png")}
        />
      </TouchableOpacity>
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
  error_img: {
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    width: 220,
    height: 110,
    top: 10,
  },
  txt_id:{
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    width: 330,
    height: 180,
    marginTop:150
  },
  scan_img:{
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    width: 200,
    height: 180,
    marginTop:200
  },

  phone_error: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    width: 100,
    height: 90,
   marginTop:330
  },

  txt_scan: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    width: 300,
    height: 300,
    marginTop:'66%'
    },

  log_in: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    height: 100,
    top: "75%",
  },
  btn: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    height: 40,
    top:300,
    end: 1,
  },
});

export default Home;
