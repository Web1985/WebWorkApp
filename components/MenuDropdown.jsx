import React, {useState, useEffect, useRef} from 'react'
import {Animated, useWindowDimensions, TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  menu_wrapp: {
    position: 'absolute',
    left: 0,
    zIndex: 10,
    top: 0,
    paddingTop: 120,
    backgroundColor: '#fff',
    width: '100%'
  },
  menu_wrapp_active: {
    position: 'absolute',
    left: '0%',
    zIndex: 10,
    top: 0,
    paddingTop: 120,

    backgroundColor: '#fff',
    width: '100%'
  },
  menu: {
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    bacgroundSize: 'cover',
    flexDirection: 'column',
    marginBottom: 20,
  },
  menu_item: {
    padding: 10,

  },
  menu_link: {
    color: 'rgb(32, 32, 32)',
    width: '100%',
    textAlign: 'center'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});




export default function MenuDropdown( { menuActive }){
const navigation = useNavigation();
  const [toVal, setToVal] = useState(0);
  const {width, height} = useWindowDimensions();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const animStyle = {
    transform: [
      {translateX: fadeAnim},
      {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
    ],
  };
  const fullHeight = {
    height: height
  };
  if (menuActive) {
    console.log(width);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.timing(fadeAnim, {
      toValue: width,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }


  return (
          <Animated.View  style={[styles.menu_wrapp, styles.shadowProp, animStyle]}>
            <View style={styles.menu}>
          
              <TouchableOpacity style={styles.menu_item} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.menu_link}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_item}>
                <Text style={styles.menu_link}>What We Suggest</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_item}>
                <Text style={styles.menu_link}>What We Do</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_item}>
                <Text style={styles.menu_link}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_item}>
                <Text style={styles.menu_link}>What We've Done</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_item} onPress={() =>navigation.navigate('KnowledgeBase') }>
                <Text style={styles.menu_link}>Knowledge Base</Text>
              </TouchableOpacity>
          
            </View>
          
          </Animated.View>
          );
}