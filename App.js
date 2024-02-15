import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header'
import Main from './components/Main'
import KnowledgeBase from './components/KnowledgeBase'



export default function App() {
  return (
      <ScrollView>
  <Header/>
    <View>
<KnowledgeBase/>    
<StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    main: {
         flex: 1,
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
