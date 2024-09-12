import React, {useState, useEffect} from 'react'
import { StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

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
    fontSize: 20,
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
  const navigation = useNavigation();
  const [isTags, setIsTags] = useState(false);
 // const [tags, setTags] = useState();
 const tags = [
  {'id': '49', 'name': 'Font Awasome'},
  {'id': '50', 'name': 'Font Awa'}
];
let tags_arr = [{'id':'ddd', 'name': 'item'}];
  useEffect(() => {
    if (item.field_tags !== '') {
      setIsTags(true);
      let tags_name =item.field_tags.split(', ');
      let tags_id =item.field_tags_1.split(', ');
      
      tags_name.forEach(myFunction);

function myFunction(item, index, tags_arr) {
  tags_arr.push({'id':'ddd', 'name': 'item'});
} 

     // setTags(item.field_tags.split(', '));

    }


  }, []);

  return (
          <View  key={item.id} style={styles.card}>
            <View style={styles.card_header}>
              <View style={styles.card_header_left}>
                <TouchableOpacity style={styles.menu_item} onPress={
                  () => {
                    navigation.navigate({
                      name: 'Category',
                      params: {
                        category: item.field_category_1,
                        category_name: item.field_category
                      }
                    })

                  }
                                  }>
                  <Text style={styles.category}><FontAwesome5 name={'tag'} solid /> {item.field_category}</Text> 
          
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.card_header_right} ><FontAwesome5 name={'comments'} solid/> {item.comment_count}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.menu_item} onPress={
              () => {
                navigation.navigate({
                  name: 'Node',
                  params: {nid: item.nid}
                })

              }
                              }>
              <Text style={styles.card_title}>{item.title}</Text>
            </TouchableOpacity>
            <View style={styles.card_footer}>
              <Text>{item.created_1}</Text>
            </View>
            {isTags ? (<View style={styles.card_footer_tags}>
              <FlatList
                data={tags_arr}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                            <Text key={item.name}>{item.name}</Text>
                                  )}
                />
                <TouchableOpacity style={styles.menu_item} onPress={
                        () => {
                          navigation.navigate({
                            name: 'Tag',
                            params: {
                              term: item.field_tags_1,
                              term_name: item.field_tags
                            }
                          })

                        }
                                  }>
                </TouchableOpacity>
            </View>) : null }
          </View>
          )
}