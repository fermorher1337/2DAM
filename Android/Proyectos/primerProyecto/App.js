import {useState} from 'react';
import {StyleSheet,Text,View,Button,TextInput,Image,Switch} from  'react-native';
import { WebView } from 'react-native-webview';


function App() {
    const nombre=""
    const apellidos=""
    const edad=""
    const email=""
     const [isEnabled, setIsEnabled] = useState(false);
     const toggleSwitch = () => setIsEnabled(previousState => !previousState);

return(
<View>

<Text>Nombre</Text>
<TextInput
style={{
height:40,
borderColor:'black',
borderWidth:2

}}
placeholder="Escribe tu nombre"
/>

<Text>Apellidos</Text>
<TextInput

style={{
height:40,
borderColor:'black',
borderWidth:2,
onChangeText={edad=>setEdad(edad)}
}}
placeholder="Escribe tus apellidos"
/>

<Text>Edad</Text>
<TextInput
style={{
height:40,
borderColor:'black',
borderWidth:2
}}
placeholder="Escribe tu edad"
/>

<Text>Correo electronico</Text>
<TextInput
style={{
height:40,
borderColor:'black',
borderWidth:2
}}
placeholder="Escribe tu correo electronico"
/>

  <Switch

        trackColor={{ false: "#blue", true: "pink" }}
        thumbColor={isEnabled ? "#red" : "#cyan"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

</View>
);



}
export default App;
//<Image
//style={{width:400,height:400}}
//source={require('./thanos-dance.gif') }
///>
