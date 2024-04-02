import React, {useState, useEffect} from 'react'
import { StyleSheet,  Text, View, TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Banner from '../components/Banner';
import Blocks from '../components/Blocks';
import About from '../components/About';

export default function Paragraph( {data}){
  if (data.type == 'Banner') {
    return (
            <Banner data={data} />
            )
  } else if (data.type == 'Blocks') {
    return (
            <Blocks data={data} />
            )
  } else if (data.type == 'About') {
    return (
            <About data={data} />
            )
  } else if (data.type == 'Our Works') {
    return (
            <Blocks data={data} />
            )
  }
  return null;

}