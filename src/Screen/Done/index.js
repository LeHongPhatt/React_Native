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
      <Image
        style={styles.done}
        source={require("../../../img/done_img.png")}
      />
      <Image
        style={styles.people}
        source={require("../../../img/people_img.png")}
      />
      <Image
        style={styles.txt}
        source={require("../../../img/txt_enjoy.png")}
      />
      <TouchableOpacity style={styles.btn_back}
      onPress={()=>props.navigation.navigate('Home')}>
      
        <Image 
        style={styles.back} 
        source={require("../../../img/back.png")} />
      </TouchableOpacity>
      <Image style={styles.txt_get}
          source={require("../../../img/txt_get.png")}
      />
      <TouchableOpacity
      onPress={()=>props.navigation.navigate('OutNoodle')}>
      <Image style={styles.next}
          source={require("../../../img/next_img.png")}
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
  done: {
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    width: 100,
    marginTop: 50,
  },
  people: {
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    height: 160,
  },
  txt: {
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    height: 30,
  },
  back: {
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    height: 50,
  },
  btn_back:{
      marginTop:120
  },
  txt_get:{
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    height:10,
    marginTop:20
  },
  next:{
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    height:40,
    marginTop:20    
  }
});

export default Done;
