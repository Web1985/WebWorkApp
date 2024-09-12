import React, {useState, useEffect} from 'react'
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import {URLS} from '../consts/urls'
import { NodeItem } from  '../components/NodeItem'
import FooterLocal from '../components/FooterLocal'

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
          body: {

          }
        });


export default function Node( { route }){
  const {nid} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [body, setBody] = useState(null);
  const getNode = async () => {
    try {
      const response = await fetch(URLS.KNOWLEDGE_BASE + '/' + nid);
      const json = await response.json();
      setData(json);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNode();
  }, []);
const { width } = useWindowDimensions();

  return(
          <View style={styles.container}>
            {isLoading ? (
                              <ActivityIndicator />
                              ) : (
                      <View style={styles.container}>   
                        <Text style={styles.title}>{data[0].title}</Text>
                        <RenderHtml
                             source={{
                                html: data[0].body
                              }}
                              contentWidth={width}
                         />
                      </View>
                      )}
                      <FooterLocal/>

          </View>
          );

}