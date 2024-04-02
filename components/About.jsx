import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, Text, View, ImageBackground, TouchableOpacity, useWindowDimensions, Image} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RenderHtml from 'react-native-render-html';


import {SERVER_URL} from '../consts/urls'
        const styles = StyleSheet.create({

          relative: {
            zIndex: 1,
            position: 'relative',
            marginTop: 0,
            paddingLeft: 15,
            paddingRight: 15
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
          title: {
            fontSize: '30px',
            fontWeight: '500',
            color: 'rgb(32, 32, 32)',
            marginBottom: 0,
            marginTop: 20,
            paddingTop: 10,
            paddingBottom: 0,
            textTransform: 'uppercase',
            textAlign: 'center',
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
          },
          subtitle_wrap: {
            textAlign: 'start',
            justifyContent: 'start',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'start',
          },
          subtitle: {
            fontSize: 20,
            fontWeight: '500',
            color: 'rgb(32, 32, 32)',
            marginBottom: 10,
            marginTop: 20,
            paddingTop: 10,
            paddingBottom: 0,
            textTransform: 'uppercase'

          },
          tags: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
          tag: {
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            marginRight: 5,
            marginBottom: 5,
            backgroundColor: '#15bfaf',
            display: 'flex',
            borderBottomLeftRadius: 3,
            borderBottomRightRadius: 3,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
          },
          tag_inner: {
            color: '#fff',
          },
          avatar: {
            height: 60,
            marginTop: 10,
            marginRight: 10,
            width: 60,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }

        });


export default function About( {data}){
  const {width} = useWindowDimensions();

  const {height} = useWindowDimensions();

  const bg = data.view_1;

  let tags_names = data.field_expert_in.split(', ');
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
              <View style={styles.subtitle_wrap}> 
                <Image 
                  style={styles.avatar}
                  source={{uri: SERVER_URL + data.field_image_1}}
                  />
                <Text style={styles.subtitle}>{data.field_title_1}</Text>
              </View>
              <View style={styles.text}> 
                <RenderHtml
                  source={{html: data.field_body_1}}
                  contentWidth={width}
                  style={styles.text}
                  />
              </View>
              <View style={styles.subtitle_wrap}> 
                <Text style={styles.subtitle}>Expert in:</Text>
              </View>
              <View> 
          
                <FlatList
                  style={styles.tags}
                  data={tags_names}
                  keyExtractor={({id}) => id}
                  renderItem={({item}) => (
                        <TouchableOpacity key={item.id+1000}  style={styles.tag}><Text style={styles.tag_inner}>{item}</Text></TouchableOpacity>
                              )}
                  />
              </View>
            </ImageBackground>
          </View>
          )
}