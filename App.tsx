import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-native/native';
import{ CreateStackNavigator } from '@react-navigation/stack';

const Stack = CreateStackNavigator();

//Tela Principal
function HomeScreen({navigator}){
  return(
    <View style={{
      flex:1,
      backgroundColor:'blue',
      justifyContent:'center',
      alignItems:'center'
    }}>   
      <Text style={{color:'yellow'}}
      >Home Principal
      </Text>
    <Button
    title="Ir para Home Secundaria"
    onPress={() => NavigationContainer.navigate('HomeSecundaria')}
    />
    </View>
  );
}

function HomeSecundaria({navigator}){
  return(
    <View style={{
      flex:1,
      backgroundColor:'blue',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text style={{color:'yellow'}}
      >Home Principal
      </Text>
    <Button
    title="Ir para Home Secundaria"
    onPress={() => Navigation.navigate('Home ')}
    />
    </View>
  );
}

//Confirmar as rotas 
function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="HomeSecundaria" component={HomeSecundaria}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
