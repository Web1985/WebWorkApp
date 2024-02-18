import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import Burger from './Burger'
import MenuDropdown from './MenuDropdown'

        const styles = StyleSheet.create({
          visible: {
            position: 'relative',
            overflow: 'visible',
          },
          cont: {
            position: 'relative',
            backgroundColor: 'white',
            display: 'flex',
            marginTop: 20,
            paddingTop: 15,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 15,
            flex: 1,
            overflow: 'visible',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 10,
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

        });


export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  function onPress() {
    setMenuActive(true);
  }

  return (
          <View style={[styles.cont, styles.shadowProp]}>
            <Image
              style={styles.logo}
              source={{
                  uri: 'https://webwork.best/themes/custom/portfolio/img/logo_black.png',
                }}
              />
            <TouchableOpacity onPress={onPress}>
              <Burger/>
            </TouchableOpacity>      
            <MenuDropdown menuActive={menuActive}/>
          </View>

          )

}
