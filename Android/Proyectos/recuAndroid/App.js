import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FotoStack = createNativeStackNavigator();



function Home() {
  return (

    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'copy-outline' : 'ios-list-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'gray',
    })}
    >

      <Tab.Screen name="Descripcion de la app" component={DescripcionScreen} />
      <Tab.Screen name="Fotos" component={FotosScreen} />
    </Tab.Navigator>

  );
}

const DescripcionScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac eros enim. Morbi tortor turpis, hendrerit eget facilisis ac, convallis id elit. Vivamus dictum eros dui, a dapibus nibh iaculis non. Donec rhoncus neque ultrices, ornare sapien ut, efficitur enim. Curabitur accumsan, risus vestibulum vestibulum mollis.</Text>

    </View>
  );
}

const SevillaScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={estiloImagen.foto}
        source={require('./img/Sevilla.jpg')}
      />

      <Text>Sevilla tiene un color especial.</Text>
      <Text>Epoca del año para visitarla: 01/01 a 31/12; no se incluye agosto.</Text>

    </View>
  );
};

function CadizScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={estiloImagen.foto}

        source={require('./img/Cadiz.jpg')}
      />
      <Text>Cadiz es una provincia que blablaba lorem ipsum.</Text>
      <Text>Epoca del año para visitarla: Carnavales, evidentemente.</Text>

    </View>
  );
}
function AlmeriaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={estiloImagen.foto}
        source={require('./img/Almeria.jpg')}
      />
      <Text>Almeria es una provincia que blablaba lorem ipsum.</Text>
      <Text>Epoca del año para visitarla: a saber.</Text>

    </View>
  );
}
function GranadaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={estiloImagen.foto}
        source={require('./img/Granada.jpg')}
      />
      <Text>Granada es una provincia que blablaba lorem ipsum.</Text>
      <Text>Epoca del año para visitarla: da lo mismo, es bonita siempre.</Text>

    </View>
  );
}
function HuelvaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={estiloImagen.foto}
        source={require('./img/Huelva.jpg')}
      />
      <Text>Huelva es una provincia que blablaba lorem ipsum.</Text>
      <Text>Epoca del año para visitarla: veranito de playeo.</Text>

    </View>
  );
}


const FotosScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => navigation.navigate('Sevilla')}>
        <Image
          style={estiloImagen.stretch}
          source={require('./img/Sevilla.jpg')}

        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Cadiz')}>

        <Image
          style={estiloImagen.stretch}
          source={require('./img/Cadiz.jpg')}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Granada')}>

        <Image
          style={estiloImagen.stretch}
          source={require('./img/Granada.jpg')}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Almeria')}>

        <Image
          style={estiloImagen.stretch}
          source={require('./img/Almeria.jpg')}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Huelva')}>
        <Image
          style={estiloImagen.stretch}
          source={require('./img/Huelva.jpg')}
        />
      </Pressable>

    </View>
  );
}

const Tab = createBottomTabNavigator();
const estiloImagen = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
  stretch: {
    width: 150,
    height: 100,
    resizeMode: 'stretch',
  },
  foto: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
  }
});



export default function App() {
  return (
    <NavigationContainer>
      <FotoStack.Navigator >
        <FotoStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <FotoStack.Screen
          name="Sevilla"
          component={SevillaScreen}
        />
        <FotoStack.Screen
          name="Cadiz"
          component={CadizScreen}
        />
        <FotoStack.Screen
          name="Huelva"
          component={HuelvaScreen}
        />
        <FotoStack.Screen
          name="Almeria"
          component={AlmeriaScreen}
        />
        <FotoStack.Screen
          name="Granada"
          component={GranadaScreen}
        />
      </FotoStack.Navigator>
    </NavigationContainer>
  )
}