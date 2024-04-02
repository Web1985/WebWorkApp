import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, useWindowDimensions} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RenderHtml from 'react-native-render-html';
import Block from '../components/Block';
import Portfolio from '../components/Portfolio';

import {SERVER_URL} from '../consts/urls'
        const styles = StyleSheet.create({

          relative: {
            zIndex: 1,
            position: 'relative',
            marginTop: 0,
          },
          banner: {
            zIndex: 1,
            position: 'relative',
            marginTop: 0,
            justifyContent: 'center',
            alignContent: 'flex-start',
            width: '100%',
            height: '100%',
            display: 'flex',
            bacgroundSize: 'cover',
            flexDirection: 'column',
            marginBottom: 10,
            paddingBottom: 50,
            alignSelf: 'flex-start',
          },
          text: {
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
          },
          image: {
            justifyContent: 'center',
            width: '100%',
            display: 'flex',
            bacgroundSize: 'cover',
            flexDirection: 'row',
            marginBottom: 10,

          },
          title: {
            fontSize: '30px',
            fontWeight: '500',
            color: 'rgb(32, 32, 32)',
            marginBottom: 0,
            marginTop: 20,
            paddingTop: 10,
            paddingBottom: 0,
            textTransform: 'uppercase'

          },
          title_wrap: {
            marginBottom: 20,
            textAlign: 'center',
            justifyContent: 'center',
            display: 'flex',
          },
          under_title: {
            textAlign: 'center',
            justifyContent: 'center',
            display: 'flex',
            width: 200,
            flexDirection: 'column',
            alignSelf: 'center',
          },
          short_line: {
            width: 100,
            height: 1,
            marginTop: 5,
            marginBottom: 5,
            backgroundColor: '#000',
            alignSelf: 'center',
          },
          long_line: {
            width: 200,
            height: 2,
            backgroundColor: '#000',
          }
        });


export default function Blocks( {data}){
  const {width} = useWindowDimensions();
  const {height} = useWindowDimensions();
  const bg = data.view_1;
  
  return (
          <View style={[styles.relative]}>
            <ImageBackground source={{uri: SERVER_URL + data.field_image}} resizeMode="cover" style={styles.banner}>
              <View style={styles.text}> 
                <View style={styles.title_wrap}>
                  <Text style={styles.title}>{data.field_title}</Text>
                  <View style={styles.under_title}>
                    <Text style={styles.short_line}></Text>
                    <Text style={styles.long_line}></Text>
                    <Text style={styles.short_line}></Text>
                  </View>
                </View>
              </View>
              <View style={styles.text}> 
                {data.type=="Our Works" ? <Portfolio data={data.view_1}/> : <Block data={data.view}/> }
              </View>
            </ImageBackground>
          </View>
          )
}