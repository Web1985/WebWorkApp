import React, {useState, useEffect} from 'react'
import {TouchableOpacity, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Burger from './Burger'
import MenuDropdown from './MenuDropdown'

        const styles = StyleSheet.create({
          visible: {
            overflow: 'visible',
            position: 'relative',
            zIndex: 15,
            display: 'flex',
            flexDirection: 'column',
            width: '100%'

          },
          cont: {
            position: 'relative',
            backgroundColor: 'white',
            display: 'flex',
            marginTop: 0,
            paddingTop: 30,
            paddingLeft: 15,
            paddingRight: 25,
            paddingBottom: 0,
            overflow: 'visible',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 15,
          },
          shadowProp: {
            shadowColor: '#171717',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          logo: {
            height: 45,
            marginTop: 10,
            width: 100
          },

          container2: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
          burger: {
            padding: 10,
            width: 55,
            marginTop:10
          }
        });


export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const navigation = useNavigation();

  function onPress(state) {

    if (state == false) {
      setMenuActive(false);
    } else {
      if (menuActive) {
        setMenuActive(false);
      } else {
        setMenuActive(true);
      }
    }
  }

  return (
          <View  style={styles.visible}>
            <View style={[styles.cont, styles.shadowProp]}>
          
              <TouchableOpacity onPress={() => {
              navigation.navigate('Home'), onPress(false)
            }}>
                <Image
                  style={styles.logo}
                  source={{uri: 'https://webwork.best/themes/custom/portfolio/img/logo_black.png'}}
                  />
              </TouchableOpacity>    
              <TouchableOpacity onPress={onPress}  style={styles.burger}>
                <Burger menuActive={menuActive}/>
              </TouchableOpacity>      
          
            </View>
            <MenuDropdown menuActive={menuActive}  onPress={onPress}/>
          </View>
          )

}
