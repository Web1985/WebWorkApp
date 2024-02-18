import React, {useState, useEffect} from 'react'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native'

        const styles = StyleSheet.create({
          menu_wrapp:{
           position: 'absolute',
           left: '0%',
           zIndex: 10,
           top: 0,
           backgroundColor: '#fff',
           width:'100%'
          },
          menu: {
            justifyContent: 'center',
            width: '100%',
            display: 'flex',
            bacgroundSize: 'cover',
            flexDirection: 'column',
            marginBottom: 20,
            
          },
          menu_item:{
            padding: 10,
           
          },
          menu_link: {
            color: 'rgb(32, 32, 32)',
             width: '100%',
            textAlign:'center'
          }
          
        });

export default function MenuDropdown( { menuActive }){

  return (
          <View style={styles.menu_wrapp}>
            <View style={styles.menu}>
              <TouchableOpacity style={styles.menu_item}>
                <Text style={styles.menu_link}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_item}>
                <Text style={styles.menu_link}>What We Suggest</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_item}>
                <Text style={styles.menu_link}>What We Do</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_item}>
                <Text style={styles.menu_link}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu_item}>
                <Text style={styles.menu_link}>What We've Done</Text>
              </TouchableOpacity>
            </View>
          
          </View>
          );
}