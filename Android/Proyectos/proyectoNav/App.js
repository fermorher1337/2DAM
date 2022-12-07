import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  SafeAreaView, StatusBar, StyleSheet,  TouchableOpacity } from "react-native";

const USER_LIST = [
  {

    id:1,
    nombre: 'Fernando'

  },
  {
    id: 2,
    nombre: 'Paquito'
  }
];

function HomeScreen() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lorem ipsum bla bla bla bla</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Listado de usuarios</Text>
    </View>

  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Info') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Listado') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'silver',
        })}
      >
        <Tab.Screen name="Info" component={HomeScreen} />
        <Tab.Screen name="Listado" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}