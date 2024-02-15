import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';



const styles = StyleSheet.create({
    wrap: {
    padding: 10,
    },
    line: {
    backgroundColor: '#000',
        marginTop: 2,
        marginBottom:2,
    width: 35,
    height: 3,
  
    },
    
  bottom: {
        width: 25,
    marginLeft: 10,
  },
  
});

export default function Burger(){
        return(
        <View style={[styles.wrap]}>
          <View style={[styles.line ]}></View>
          <View style={[styles.line ]}></View>
          <View style={[styles.line, styles.bottom ]}></View>
        </View>
                )
}