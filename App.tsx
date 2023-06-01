import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'

export default function App() {
  const [fontes, setFontes] = useState(false);
  async function loadFonts() {
    await Font.loadAsync({
      suaFonte: require('./assets/Oswald/static/Oswald-ExtraLight.ttf'),
      fonte: require('./assets/Oswald/static/Oswald-Medium.ttf'),
      oswald: require('./assets/Oswald/static/Oswald-SemiBold.ttf'),

    });
  }
  useEffect(() => {
    loadFonts()
      .then(() => {
        setFontes(true);

      })
      .catch((erro) => {
        console.log('ocorre um erro');
      })
  },);
  
  const [Somar, setSoma] = useState(0);

  const Contador = () => {
    setSoma(Somar + 1);
  };


  return (
    <View style={styles.container}>
      {fontes ?
        <Text style={{ fontFamily: 'oswald', fontSize: 70,marginTop:100 }}>fala comigo!
        </Text>
        :
        <Text>Boa noite!</Text>
      }
      <View>
        <Text style={{fontSize:50}}> {Somar}</Text>
      </View>
      

      <View  style={styles.button}> 
  <Button
  title="Clique para somar" onPress={Contador} />
  </View>
  
    </View>
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginVertical:350,
    marginHorizontal:140,
    width:150,
   

   

  }
});



