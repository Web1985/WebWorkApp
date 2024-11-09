import React, {useState, useEffect} from 'react'
import {TouchableOpacity, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

   const styles = StyleSheet.create({
          visible: {
            overflow: 'visible',
            position: 'relative',
            zIndex: 15,
            display: 'flex',
            flexDirection: 'column',
            width: '100%'

          },
          footer: {
            position: 'relative',
            backgroundColor: 'rgb(32, 32, 32)',
            display: 'flex',
            marginTop: 30,
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
          footerColor:{
              color: '#fff'
          }
        });
 
export default function Footer(){
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
            <View style={styles.footer}>
                <Text style={styles.footerColor}>Footer</Text>

        <TouchableOpacity onPress={() => {
              navigation.navigate('Home'), onPress(false)
            }}>
                <Image
                  style={styles.logo}
                  source={{uri: 'https://webwork.best/themes/custom/portfolio/img/logo.png'}}
                  />
              </TouchableOpacity> 
                <Text>Footer</Text>
                </View>
                
                )
}
    