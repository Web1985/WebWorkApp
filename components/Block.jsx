import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, Text, View, ImageBackground, TouchableOpacity, useWindowDimensions} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RenderHtml from 'react-native-render-html';

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
                fontSize: 20,
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


export default function Block( {data}){
    const {width} = useWindowDimensions();

    const {height} = useWindowDimensions();

    const bg = data.view_1;
    const blocks = JSON.stringify(data.view);
    return (
            <View style={[styles.relative]}>
                    <View style={styles.text}> 
                    <Text>{data.view}</Text>
                      <FlatList
                                    data={blocks}
                                    keyExtractor={({id}) => id}
                                    renderItem={({item}) => (
                     <Text>{item.type}</Text>
                                                             )}
                            />
                        <RenderHtml
                            source={{
                                    html: data.field_body
                                }}
                            contentWidth={width}
            
                            />
                    </View>
              
            
            </View>

            )
}