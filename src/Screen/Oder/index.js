import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  navigation,
} from "react-native";
import Home from "../Home";

const image = require("../../../img/bg_img.png");

const Order = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.img_bg}>
      <Image
        source={require("../../../img/logo.png")}
        style={styles.logo}
      ></Image>
      <Image
        style={styles.infor}
        source={require("../../../img/infor_img.png")}
      />
      <Image
        style={styles.name}
        source={require("../../../img/name_img.png")}
      />
      <View style={styles.circle}>
        <Image
          style={styles.img1}
          source={require("../../../img/circle_red.png")}
        ></Image>
        <Image
          style={styles.img2}
          source={require("../../../img/circle_red.png")}
        ></Image>
      </View>
      <View style={styles.icon_5}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Information")}>
          <Image
            style={styles.icon}
            source={require("../../../img/food_first.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.icon_2}
          source={require("../../../img/food_second.png")}
        />
        <TouchableOpacity onPress={()=>props.navigation.navigate('AllOrder')}>
        <Image
          style={styles.icon_3}
          source={require("../../../img/food_third.png")}
        />

        </TouchableOpacity>
      </View>
      <Image
        style={styles.text}
        source={require("../../../img/text_infor.png")}
      />
      <TouchableOpacity
        style={styles.get}
        onPress={() => props.navigation.navigate("Done")}
      >
        <Image
          style={styles.get_img}
          source={require("../../../img/getnoodle.png")}
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
  infor: {
    flexDirection: "column",
    resizeMode: "contain",
    alignSelf: "center",
    width: 300,
    height: 130,
    top: 10,
  },
  name: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    width: 330,
    height: 180,
    top: 160,
    left: 46,
  },

  log_in: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    height: 100,
    top: "85%",
  },
  btn: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    height: 40,
    top: 80,
    end: 1,
  },
  icon: {
    height: 160,
    width: 72,
  },
  icon_2: {
    height: 160,
    width: 72,
  },
  icon_3: {
    height: 160,
    width: 72,
  },
  icon_5: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: 90,
  },
  text: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    top: "69%",
  },
  get_img: {
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
    height: 200,
    width: 300,
  },
  get: {
    top: 70,
  },
  circle_red: {
    justifyContent: "flex-start",
    position: "absolute",
    alignSelf: "flex-start",
    height: 130,
    width: 130,
    top: 100,
  },
  img1: {
    height: 130,
    width: 130,
  },
  img2: {
    height: 130,
    width: 130,
    left:10
  },
  img3: {
    height: 130,
    width: 130,
    left:15
  },
  circle: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    top: 325,
  },
});

export default Order;
