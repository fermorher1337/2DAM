import {useState} from 'react';
import {StyleSheet,Text,View,Button,TextInput,Image,Switch} from  'react-native';
import { WebView } from 'react-native-webview';


function App() {
    const [nombre, setNombre] = useState()
    const [apellidos, setApellidos]= useState()
    const [edad, setEdad]=useState()
    const [email, setEmail]=useState()

    const [textoBoole, setTextoBoole]=useState(false)
    const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);




return(
<View>

<Text>Nombre</Text>
<TextInput
style={{
height:40,
borderColor:'black',
borderWidth:1
}}
onChangeText={(value)=>setNombre(value)}
placeholder="Escribe tu nombre"
/>

<Text>Apellidos</Text>
<TextInput

style={{
height:40,
borderColor:'black',
borderWidth:1,

}}
onChangeText={(value)=>setApellidos(value)}
placeholder="Escribe tus apellidos"
/>

<Text>Edad</Text>
<TextInput
  keyboardType = 'numeric'
style={{
height:40,
borderColor:'black',
borderWidth:1
}}
onChangeText={(value)=>setEdad(value)}
placeholder="Escribe tu edad"
/>

<Text>Correo electronico</Text>
<TextInput
style={{
height:40,
borderColor:'black',
borderWidth:1
}}
onChangeText={(value)=>setEmail(value)}
placeholder="Escribe tu correo electronico"
/>
<View style={{alignItems: "center"}}>
        {isEnabled ? <Text style={{ alignItems: 'center',marginTop:5 }}>Hombre</Text> : <Text style={{ alignItems: 'center',marginTop:5 }}>Mujer</Text>}

  <Switch

        trackColor={{ false: "#blue", true: "yellow" }}
        thumbColor={isEnabled ? "#red" : "#cyan"}
              activeText={'On'}
              inActiveText={'Off'}
              backgroundActive={'purple'}
              backgroundInactive={'gray'}
        onValueChange={()=> setIsEnabled(previousState => !previousState)}
        value={isEnabled}
      />
      </View>
      <Button
      color='red'
      title={!textoBoole?"Activar":"Desactivar"}
      onPress={()=>setTextoBoole(current=>!current)}

      />
    {
    textoBoole?
    <Text>El nombre es {nombre}, los apellidos son {apellidos} y tiene {edad} anhos. Su correo es {email} y su sexo es {isEnabled?"hombre.":"mujer."}</Text>
    : ""}


{textoBoole?(isEnabled?
<Image
style={{width:350,height:350}}
source={require('./thanos-dance.gif') }/>
:<Image
 style={{width:350,height:350}}
 source={require('./shehulk-twerk.gif') }
/> ):""}






</View>


);



}
export default App;

///>
