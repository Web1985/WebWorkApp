import React, {useState, useEffect} from 'react'
import {URLS} from '../consts/urls'
import {ActivityIndicator, ScrollView, ImageBackground, FlatList, StyleSheet, Text, View, Button} from 'react-native'
import image from '../assets/node-min.jpg';
import Paragraph from '../components/Paragraph'
import FooterLocal from '../components/FooterLocal'


        const styles = StyleSheet.create({

            relative2: {
                zIndex: 1,
                position: 'relative',
                marginTop: 0,
                
            },

        });



export default function Home( {navigation}) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(URLS.HOME);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    return (
            <ScrollView  style={styles.relative2}>
                {isLoading ? (
                                    <ActivityIndicator />
                                ) : (
                                <FlatList
                                    data={data}
                                    keyExtractor={({id}) => id}
                                    renderItem={({item}) => (
                                                        <ScrollView>
                                                        <Paragraph data={item}/>
                                                </ScrollView>

                                                )}
                            />

                        )}
                <FooterLocal/>
            </ScrollView>
            )
}