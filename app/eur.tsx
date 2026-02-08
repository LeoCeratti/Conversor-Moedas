import { StyleSheet,Text,View } from "react-native";


export default function Eur(){
    return(
        <View style={styles.container}>
            <Text>Eur</Text>
        </View>
    )
        
    
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})