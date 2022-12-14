import * as React from 'react';
import { Text, View, SafeAreaView, Button, StyleSheet, StatusBar, FlatList, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState, useRef } from 'react';

export default function App() {

  const [edadString, setEdadString] = useState(0);

  const stylesTextInput = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  const styleList = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      nombre: "Fernando",
      apellido: "Moreno",
      edad: "28"
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      nombre: "Paquito",
      apellido: "Rodriguez",
      edad: "22"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      nombre: "Joaquin",
      apellidos: "del Betis",
      edad: "31"
    },
  ];

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const regexNumeric = new RegExp("[0-9]+")

  const renderItem = ({ item }) => (
    <Item title={item.nombre} edad={item.edad} />

  );
  const Item = ({ title, edad }) => {
    return (
      <View style={styleList.item}>
        <Text style={styleList.title}>{title}</Text>
      </View>
    )
      ;


  //Ha sido necesario crear una pantalla SupBusqueda para contener las dos funciones Busqueda y usuario
  function SupBusqueda() {
    return (
      <Stack.Navigator initialRouteName='BusquedaScreen'>
        <Stack.Screen name='BusquedaScreen' component={BusquedaScreen} />
        <Stack.Screen name='Usuarios' component={UsuariosScreen} />
      </Stack.Navigator>)
  }



    function BusquedaScreen({ navigation }) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Busqueda Edad: {edadString}</Text>
          <TextInput
            style={stylesTextInput.input}
            keyboardType="numeric"
            onChangeText={setEdadString}
          />
          <Button
            title="Buscar por edad"
            color="purple"
            disabled={!regexNumeric.test(edadString)}//El boton se desactiva si la regex no se cumple
            accessibilityLabel="Buscar por edad"
            onPress={() => {
              navigation.push('BusquedaScreen')
              navigation.navigate('Usuarios', {
                subData: DATA.filter(function (item) {
                  return item.edad < edadString;
                }).map(function ({ id, nombre, apellido, edad }) {
                  return { id, nombre, apellido, edad };
                })
              })
            }}
          />

        </View>

      );
    }

    function UsuariosScreen({ route }) {

      console.log(route.params.subData)
      return (
        <View styleList={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Esta es la lista de usuarios</Text>
          <FlatList
            data={route.params.subData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      );
    }


    function HistoriaScreen() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Bienvenido a la historia de los dispositivos</Text>
          <Image
            source={require('../ejercicioPDF/img/nokia3310.jpg')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Esto es un Nokia 3310</Text>
          <Image
            source={require('../ejercicioPDF/img/blackberry.jpg')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Esto es una Blackberry</Text>
          <Image
            source={require('../ejercicioPDF/img/googlepixel.jpg')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Esto es un Google Pixel</Text>

        </View>
      );
    }



    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Historia') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Busqueda') {
                iconName = focused ? 'ios-search' : 'ios-search-outline';
              }
              else if (route.name == 'Usuarios') {
                iconName = focused ? 'ios-person' : 'ios-person-outline';
              }


              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black',
          })}
        >
          <Tab.Screen name="Historia" component={HistoriaScreen} />
          <Tab.Screen name="Busqueda" component={SupBusqueda} />


        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}