import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, useWindowDimensions} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RenderHtml from 'react-native-render-html';

import {SERVER_URL} from '../consts/urls'
        const styles = StyleSheet.create({

            relative: {
                zIndex: 1,
                position: 'relative',
                marginTop: 0,
                marginTop: -150
            },

            banner: {
                zIndex: 1,
                position: 'relative',
                marginTop: 0,
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                display: 'flex',
                bacgroundSize: 'cover',
                flexDirection: 'column',
                marginBottom: 10,
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
                marginBottom: 30,
                marginTop: 20,
                paddingTop: 10,
                paddingBottom: 10

            },
        });


export default function Banner( {data}){
    const {width} = useWindowDimensions();

    const {height} = useWindowDimensions();

    return (
            <View style={[styles.relative, {height: height}]}>
                <ImageBackground source={{uri: SERVER_URL + data.field_image}} resizeMode="cover" style={styles.banner}>
                    <View style={styles.text}>                
                        <RenderHtml
                            source={{
                                    html: data.field_body
                                }}
                            contentWidth={width}
            
                            />
                    </View>
                </ImageBackground>
                                
            </View>

            )
}