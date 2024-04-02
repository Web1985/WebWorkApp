import React, {useState, useEffect, useCallback } from 'react'
import { useForm, Controller} from 'react-hook-form';
import axios from 'axios';

import {View, Text, StyleSheet, TextInput, Button } from 'react-native'
import {URLS} from '../consts/urls'
        const styles = StyleSheet.create({

            relative: {
                zIndex: 1,
                position: 'relative',
                marginTop: 0,
            },
            banner: {
                zIndex: 1,
                position: 'relative',
                marginTop: 0,
                justifyContent: 'center',
                alignContent: 'flex-start',
                width: '100%',
                height: '100%',
                display: 'flex',
                bacgroundSize: 'cover',
                flexDirection: 'column',
                marginBottom: 10,
                paddingBottom: 50,
                alignSelf: 'flex-start',
            },
            text: {
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row',
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
                marginBottom: 0,
                marginTop: 20,
                paddingTop: 10,
                paddingBottom: 0,
                textTransform: 'uppercase'

            },
            title_wrap: {
                marginBottom: 20,
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
            },
            under_title: {
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                width: 200,
                flexDirection: 'column',
                alignSelf: 'center',
            },
            short_line: {
                width: 100,
                height: 1,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: '#000',
                alignSelf: 'center',
            },
            long_line: {
                width: 200,
                height: 2,
                backgroundColor: '#000',
            },
            form: {
                marginLeft: 20,
                marginBottom: 40
            },
            input: {
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 15,
                paddingBottom: 15,
                borderWidth: 1,
                marginBottom: 15,
                width: 200,
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row',
            }

        });


export default function Webform( {data}){
    const {control, handleSubmit, formState: {errors}} = useForm();
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        console.log(data);

 axios.get(URLS.SESSION).then(result => {

        if (200 === result.status) {
          const csrfToken = result.data;
          fetch(URLS.WEBFORM, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken
          },
          body: JSON.stringify({
          'webform_id':'contact',
          'entity_type' : null,
          'entity_id' : null,
          'in_draft' : false,
          'uri' : [URLS.CONTACT],
          'email' : 'email',
          'message' : 'message',
          }),
        })
        .then(response => response.json())
        .then(
           (data) => {
               setStatus(1);
           },
           (error) => {
               setStatus(2);
          }
        ) .finally(() => setLoading(false))
       
       }
     });
    };
    return (
            <View style={[styles.relative]}>
                <View style={styles.text}> 
                    <View style={styles.title_wrap}>
                        <Text style={styles.title}>{data.field_title}</Text>
                        <View style={styles.under_title}>
                            <Text style={styles.short_line}></Text>
                            <Text style={styles.long_line}></Text>
                            <Text style={styles.short_line}></Text>
                        </View>
                    </View>
                </View>
                <View
                    style={styles.form} >
                    <Controller
            
                        control={control}
                        name="fieldName"
                        render={({ field }) => (
                                <TextInput
                                {...field}
                                style={styles.input}
                                placeholder="Enter your data"
                                />
                                    )}
                    />
                    <Button title="Submit" onPress={handleSubmit(onSubmit)} />
                </View>
            </View>
            )
}