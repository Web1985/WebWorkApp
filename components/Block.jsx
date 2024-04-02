import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, Text, View, ImageBackground, Image, TouchableOpacity, useWindowDimensions} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RenderHtml from 'react-native-render-html';
import { SvgUri } from 'react-native-svg';

import {SERVER_URL} from '../consts/urls'
        const styles = StyleSheet.create({

          relative: {
            zIndex: 1,
            position: 'relative',
            marginTop: 0,
          },
          text: {
            textAlign: 'center',
            justifyContent: 'center',
            display: 'flex',
          },
          title: {
            fontSize: 20,
            fontWeight: '500',
            color: 'rgb(32, 32, 32)',
            marginBottom: 10,
            marginTop: 20,
            paddingTop: 0,
            paddingBottom: 0,
            textTransform: 'uppercase',
            textAlign: 'center',
          },
          block: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: '#ffffff',
            marginBottom: 15,
            marginLeft: 15,
            marginRight: 15,
          },
          icon: {
            marginTop: 0,
            textAlign: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
          }
        });


export default function Block( {data}){
  const {width} = useWindowDimensions();
  const {height} = useWindowDimensions();
  const blocks = JSON.parse(data);

  return (
          <View style={[styles.relative]}>
            <View style={styles.text}> 
          
              <FlatList
                data={blocks}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                        <View key={item.id_1+100000} style={styles.block}>
                        <View  style={styles.icon}>
                          <SvgUri width="60"   height="60"  uri={SERVER_URL + item.field_icon}/> 
                        </View>
                        <Text style={styles.title}>{item.field_title} </Text>
                        <RenderHtml
                          source={{html: item.field_body}}
                          contentWidth={width}
                          style={styles.text}
                          />
                    </View>
                        )}
            />
          </View>
          
          
          </View>

          )
}