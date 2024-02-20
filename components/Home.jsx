import React, {useState, useEffect} from 'react'
import {URLS} from '../consts/urls'
import {ActivityIndicator, ImageBackground, FlatList, StyleSheet, Text, View, Button} from 'react-native'
import image from '../assets/node-min.jpg';
import Card from './Card'

        const styles = StyleSheet.create({
          container: {
            paddingTop: 0,
            paddingBottom: 40,
            paddingLeft: 15,
            paddingRight: 15,

          },
          relative: {
            zIndex: 1,
            position: 'relative',
            marginTop: 100,
          },
          block: {
            marginTop: 10,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 10,
            borderRadius: 4,
            backgroundColor: '#f9f9f9'
          },
          banner: {
            zIndex: 1,
            position: 'relative',
          },
          image: {
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            flex: 1,
            bacgroundSize: 'cover',
            flexDirection: 'row',
            marginBottom: 10,

          },
          title: {
            fontSize: '30px',
            fontWeight: '500',
            color: 'rgb(32, 32, 32)',
            marginBottom: 50,
            marginTop: 20,
            paddingTop: 30,
            paddingBottom: 10

          },
        });



export default function Home({navigation}) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getNodes = async () => {
    try {
      const response = await fetch(URLS.KNOWLEDGE_BASE);
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
          <View  style={styles.relative}>
            <View style={styles.banner}>
              <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Home</Text>
              </ImageBackground>
            </View>
              <View style={styles.container}>
              {isLoading ? (
                              <ActivityIndicator />
                                ) : (
                      <Text style={styles.title}>Comming soon!</Text>
                        )}
            </View>
          </View>
          )
} 