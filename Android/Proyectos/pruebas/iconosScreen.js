import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TouchableHighlight } from 'react-native';

const DATA = [
  {
    name:'Fer',
    surname: 'Nyando',
    phone:'601232211',
    icon: 'aperture-outline',
  },
  {
    name:'Fer2',
    surname: 'Nyando',
    phone:'601232211',
    icon:'baseball-outline',
  },
  {
    name:'Fer3',
    surname: 'Nyando',
    phone:'601232211',
    icon:'bicycle-outline',
  },
  {
    name:'Fer4',
    surname: 'Nyando',
    phone:'601232211',
    icon:'brush-outline',
  },
  {
    name:'Fer5',
    surname: 'Nyando',
    phone:'601232211',
    icon:'build-outline',
  },
];

const Item = ({ name, surname,icon }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}, {surname}, <Icon name={icon}></Icon></Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name} surname={item.surname} icon={item.icon} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
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
    backgroundColor: 'camel',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;