import { StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.titulo}>
        <Text>Conversor De Moedas</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.btnBarra}>

        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
  
  },
  titulo:{
    marginTop:50,
    alignItems: 'center',
  },
  btnBarra:{

  }
});
