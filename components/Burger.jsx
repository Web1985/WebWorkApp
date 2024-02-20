import React, {useState, useRef} from 'react';
import {Animated, StyleSheet, View, useWindowDimensions} from 'react-native';



const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    width: 35,
    height: 45,

  },
  line: {
    backgroundColor: '#000',
    marginTop: 2,
    marginBottom: 2,
    width: 35,
    height: 3,
  },
  bottom: {
    width: 25,
    marginLeft: 10,
  }

});

export default function Burger( { menuActive }){
  const fadeAnim = useRef(new Animated.Value(0.5)).current; // Initial value for opacity: 0


  if (menuActive) {
    Animated.timing(fadeAnim, {
      toValue: 0.35,
      duration: 300,
      useNativeDriver: false,
    }).start();
  } else {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }


  const widthT = fadeAnim.interpolate({
    inputRange: [0.5, 1],
    outputRange: [25, 35],
    extrapolate: 'clamp',
  });
  const leftT = fadeAnim.interpolate({
    inputRange: [0.5, 1],
    outputRange: [10, 0],
    extrapolate: 'clamp',
  });

  const width = fadeAnim.interpolate({
    inputRange: [0.35, 1],
    outputRange: [35, 20],
    extrapolate: 'clamp',
  });
  const left = fadeAnim.interpolate({
    inputRange: [0.35, 1],
    outputRange: [0, 15],
    extrapolate: 'clamp',
  });
  return(
          <View style={[styles.wrap]}>
            <Animated.View  style={[styles.line, {width: widthT, left: leftT}]}></Animated.View>
            <View style={[styles.line]}></View>
            <Animated.View  style={[styles.line, {width, left}]}></Animated.View>
          </View>
          )
}