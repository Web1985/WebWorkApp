import React, {useState, useEffect, useCallback } from 'react'
import { StyleSheet, FlatList, Text, View, ImageBackground, Image, TouchableOpacity, useWindowDimensions, Linking } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RenderHtml from 'react-native-render-html';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import {SERVER_URL} from '../consts/urls'
        const styles = StyleSheet.create({
          banner: {

          },
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
          thumbnail: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 120,
            paddingBottom: 120,
            backgroundColor: '#ffffff',
            marginBottom: 15,
            marginLeft: 15,
            marginRight: 15,

          },
          opacity: {
            opacity: 0.35
          },
          btn_wrap: {
                textAlign: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
             flexWrap: 'wrap',
          },
          btn: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 15,
            paddingBottom: 15,
            borderWidth: 1,
            marginBottom: 15,
            width: 200,
        textAlign: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
          },
          btn_text: {
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
          }

        });


export default function Portfolio( {data}){
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const {height} = useWindowDimensions();
  const blocks = JSON.parse(data);

  let OpenURLButton = ({url}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (<TouchableOpacity onPress={handlePress} style={styles.btn}><Text style={styles.btn_text}>LIVE SITE</Text></TouchableOpacity>);
  };

  return (
          <View style={[styles.relative]}>
            <View style={styles.text}> 
          
              <FlatList
                data={blocks}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                        <ImageBackground  key={item.id_1 + 30000} source={{uri: SERVER_URL + item.field_thumbnail}} resizeMode="cover"  style={styles.thumbnail} imageStyle={styles.opacity}>
                        <View>
                          <Text style={styles.title}>{item.field_title}</Text>
                          <RenderHtml
                            source={{html: item.field_body}}
                            contentWidth={width}
                            style={styles.text}
                            />
                          <View style={styles.btn_wrap}>
                            <TouchableOpacity style={styles.btn} onPress={
                                    () => {
                                      navigation.navigate({
                                        name: 'Category',
                                        params: {
                                          category: item.field_category_1,
                                          category_name: item.field_category
                                        }
                                      })

                                    }
                                              }>
                              <Text style={styles.btn_text}>VIEW THE PROJECT</Text> 
                            </TouchableOpacity>
                            <OpenURLButton url={item.field_link}/>
                          </View>
                        </View>
                        </ImageBackground>
                            )}
                />
            </View>
          
          </View>

          )
}