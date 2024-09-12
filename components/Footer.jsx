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
        marginTop: 0,
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 25,
        paddingBottom: 25,
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
    homeLink: {
        color: 'white',

    }

});

export default function Footer() {

    return (
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => {
                        navigation.navigate('Home'), onPress(false)
                                      }}>
                    <Text style={styles.homeLink}>home</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => {
                        navigation.navigate('Home'), onPress(false)
                                      }}>
                    <Text style={styles.homeLink}>return</Text>
                </TouchableOpacity> 
            </View>

            )
}
    