import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Banner from '../components/Banner';
import Blocks from '../components/Blocks';


export default function Paragraph({data}){
        if(data.type=='Banner'){
             return (
                <Banner data={data}/>
                )
        }else if(data.type=='Blocks'){
            return (
            <Blocks data={data}/>
    )
        }
        return null;
       
}