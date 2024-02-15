import React, {useState, useEffect} from 'react'
import {URLS} from '../consts/urls'
import {ActivityIndicator, ImageBackground, FlatList, StyleSheet, Text, View} from 'react-native'
const image = {uri: '../assets/node-min.jpg'};
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
          },
          banner: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          },
          image: {
    flex: 1,
    justifyContent: 'center',
  },
          title: {
            fontSize: '30px',
            fontWeight: '500',
            color: 'rgb(32, 32, 32)',
            marginBottom: 50,
            marginTop: 20,

          },
        });





export default function KnowledgeBase() {
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
          <View style={styles.container}>
            <View style={styles.banner}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <Text style={styles.title}>Knowledge Base</Text>
              </ImageBackground>
            </View>
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