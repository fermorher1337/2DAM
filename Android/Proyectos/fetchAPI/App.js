import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, FlatList, StyleSheet, StatusBar, Button, Alert, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import React from 'react';

//Fetcheo
fetch("http://172.27.112.1:8080/fruits")
  .then((response) => response.json())
  .then((fruits) => console.log(fruits));
//


function posteoFruta(nombre,precio){
  fetch('http://172.27.112.1:8080/fruits', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nombre,
      price: precio
    })
  })
    .then(console.log("Datos enviados: "+ nombre+"-"+precio));
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#78dcde',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


function HomeScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://172.27.112.1:8080/fruits')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Listado de frutas</Text>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>{item.name + '.' + item.price}</Text>
        )}
      />
    </View>
  );
}

function PostScreen() {
  const [nombre, onChangeNombre] = React.useState('');
  const [precio, onChangePrecio] = React.useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

  

      <TextInput
        style={styles.input}
        onChangeText={onChangeNombre}
        value={nombre}
        placeholder="Introduce el nombre"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePrecio}
        value={precio}
        placeholder="Introduce el precio"
        keyboardType="numeric"
      />

      <Button
       onPress={() => posteoFruta(nombre,precio)}
        title="Posteo a la API"
        color="#841584"

      />

    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Post de fruta" component={PostScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
