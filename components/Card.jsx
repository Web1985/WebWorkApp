import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 15,
    paddingRight: 15
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 4,
    backgroundColor: '#f9f9f9'

  },
  card_header: {
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card_header_left: {
  },
  card_header_right: {
    color: '#a0a0a0',
  },
  category: {
    color: '#2898ce',
    fontWeight: '500'
  },
  card_title: {
    fontSize: '20px',
    fontWeight: '500',
    color: 'rgb(32, 32, 32)'
  },
  card_footer: {
    marginTop: 5
  },
  card_footer_tags: {
    marginTop: 10,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: '#eee'
  },
});

export default function Card( {item}){

  const [isTags, setIsTags] = useState(false);

  useEffect(() => {
    if (item.field_tags !== '') {
      setIsTags(true)
    }
  }, []);
  
  return (
          <View  key={item.id} style={styles.card}>
            <View style={styles.card_header}>
              <View style={styles.card_header_left}>
                <Text style={styles.category}><FontAwesome5 name={'tag'} solid /> {item.field_category}</Text> 
              </View>
              <View>
                <Text style={styles.card_header_right} ><FontAwesome5 name={'comments'} solid/> {item.comment_count}</Text>
              </View>
            </View>
            <Text style={styles.card_title}>
            {item.title}
            </Text>
            <View style={styles.card_footer}><Text>{item.created_1}</Text></View>
              {isTags ? (<View style={styles.card_footer_tags}><Text>{item.field_tags}</Text></View>) : null }
            </View>
          )
}