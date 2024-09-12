import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header'
import Footer from './components/Footer'


import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home'
import KnowledgeBase from './pages/KnowledgeBase'
import Node from './pages/Node'
import Tag from './pages/Tag'
import Category from './pages/Category'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
          <NavigationContainer>
            <Header/>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                       />
              <Stack.Screen
                name="KnowledgeBase"
                component={KnowledgeBase}
                />
              <Stack.Screen
                name="Node"
                component={Node}
                />
               <Stack.Screen
                name="Tag"
                component={Tag}
                />
               <Stack.Screen
                name="Category"
                component={Category}
                />
            </Stack.Navigator>
            <Footer/>
          </NavigationContainer>
     

          );
}

const styles = StyleSheet.create({
  container_main: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
