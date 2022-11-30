// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




function HomeScreen({ navigation, route }) {
  const {userName}=route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla home</Text>
      <Button
        onPress={() => navigation.navigate('Pantalla2')}
        title="Pantalla 2"
        color="red"
      />
    </View>
  );
}

function Pantalla2(route) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla 2</Text>
      <Button
        onPress={() => navigation.navigate('HomeScreen')}
        title="Pantalla home"
        color="purple"
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="Pantalla home" component={HomeScreen} />
        <Stack.Screen name="Pantalla 2" component={Pantalla2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;