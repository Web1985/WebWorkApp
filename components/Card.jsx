import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft:15,
        paddingRight:15
    },
    card: {
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight:10,
        borderRadius: 4,
        backgroundColor: '#f9f9f9'

    }
});

export default function Card( {item}){
    return (
            <View style={styles.card}>
                <Text key={item.id}>
                {item.title}, {item.field_category}
                </Text>
            </View>
            )
}