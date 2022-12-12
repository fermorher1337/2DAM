import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity,SafeAreaView,StyleSheet,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';



function ListadoScreen() {
  return (
    <Stack.Navigator initialRouteName="Nombres">
      <Stack.Screen name="Nombres" component={NombresScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Mis contactos', headerTitleAlign: 'center' }} />
    </Stack.Navigator>
  )
}

function NombresScreen({ navigation }) {
  const DATA = [
    {
      id: 'bd7acb1ea-c1b1-46c2-a1ed5-3ad53abb28ba',
      Nombre: 'Joaquin',
      Apellido: 'del Betis',
      Edad: '7',
    },

    {
      id: '3ac68a2fc-c605-48d3-a14f8-fbd91aa97f63',
      Nombre: 'CR',
      Apellido: '7',
      Edad: '1',
    },

    {
      id: '3ac68a1fc-c605-48d3-a4f8-fbd91aa97f63a',
      Nombre: 'Shrek',
      Apellido: 'Rodriguez',
      Edad: '5',
    }
  ];

  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const App = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
}

function PerfilScreen({ route }) {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 100 }}>
      <Text>Nombre: {item.Nombre}</Text>
      <Text>Apellido: {item.Apellido}</Text>
      <Text>Edad: {item.Edad}</Text>
    </View>
  )
}

function PerfilesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 60 }}>
      <Text>Esta aplicación muestra información de los contactos</Text>
    </View>
  )
}


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Listado') {
              iconName = focused
                ? 'person'
                : 'person-outline';
            } else if (route.name === 'Informacion') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="Listado" component={ListadoScreen} />
        <Tab.Screen name="Informacion" component={PerfilesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}