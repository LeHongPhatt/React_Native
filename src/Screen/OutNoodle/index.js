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

const Done = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.img_bg}>
      <Image
        source={require("../../../img/logo.png")}
        style={styles.logo}
      ></Image>
      <Image style={styles.txt_out}
          source={require("../../../img/txt_out.png")}
      />
      <Image style={styles.txt_none} 
        source={require("../../../img/txt_none.png")}
      />
      <TouchableOpacity onPress={()=>props.navigation.navigate('Error')}>
        <Image style={styles.img_tea}
        source={require("../../../img/tea_img.png")}
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
    width: 100,
    height: 90,
    top: 50,
  },
  txt_out:{
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    height:200,
    width: 300,
  },
  txt_none:{
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    height:200,
    width: 300,
    marginTop:-120
  },
  img_tea:{
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    height:300,
    width: 300,
    marginTop:-120
  }
});

export default Done;
