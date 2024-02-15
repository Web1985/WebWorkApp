import React, {useState, useEffect} from 'react'
import {KNOWLEDGE_BASE} from '../consts/urls'
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native'

import Card from './Card'

        const styles = StyleSheet.create({
            container: {
                paddingTop: 40,
                paddingBottom: 40,
                paddingLeft: 15,
                paddingRight: 15
            },
            block: {
                marginTop: 10,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 10,
                borderRadius: 4,
                backgroundColor: '#f9f9f9'

            }
        });





export default function Main() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getNodes = async () => {
        try {
            const response = await fetch('https://webwork.best/api/knowledge-base');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getNodes();
    }, []);


    return (
            <View style={styles.container}>
                {isLoading ? (
                                    <ActivityIndicator />
                                    ) : (
                            <FlatList
                                data={data}
                                keyExtractor={({id}) => id}
                                renderItem={({item}) => (
                                                    <Card item={item} />
                                                )}
                            />
                            )}
            </View>
            )
} 