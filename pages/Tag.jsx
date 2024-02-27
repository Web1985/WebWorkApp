import React, {useState, useEffect} from 'react'
import {URLS} from '../consts/urls'
import {ActivityIndicator, ScrollView, ImageBackground, FlatList, StyleSheet, Text, View} from 'react-native'
import image from '../assets/node-min.jpg';
import Card from '../components/Card'

        const styles = StyleSheet.create({
          container: {
            paddingTop: 0,
            paddingBottom: 40,
            paddingLeft: 15,
            paddingRight: 15,
            position: 'relative',
          },
          relative: {
            zIndex: 1,
            position: 'relative',
            marginTop: 0,
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
            display: 'flex',
            bacgroundSize: 'cover',
            flexDirection: 'row',
            marginBottom: 10,

          },
          title: {
            fontSize: '30px',
            fontWeight: '500',
            color: 'rgb(32, 32, 32)',
            marginBottom: 30,
            marginTop: 20,
            paddingTop: 10,
            paddingBottom: 10

          },
        });



export default function Teg({ route }) {

  const { term } = route.params;
  const { term_name } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getNodes = async () => {
    try {
      const response = await fetch(URLS.TERM+'/'+term);
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
          <ScrollView  style={styles.relative}>
            <View style={styles.banner}>
              <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>{term_name}</Text>
              </ImageBackground>
            </View>
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
          </ScrollView>
          )
} 