import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Header from './components/Header'
import Main from './components/Main'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './components/Home'
import KnowledgeBase from './components/KnowledgeBase'

        const Stack = createNativeStackNavigator();


export default function App() {

  return (
          <NavigationContainer>
            <Header/>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                            title: 'My home',
                            headerStyle: {
                              backgroundColor: '#fff',
                            },
                            headerTintColor: '#000',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                            },
                          }}
                />
              <Stack.Screen
                name="KnowledgeBase"
                component={KnowledgeBase}
                />
            </Stack.Navigator>
          </NavigationContainer>

          );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
