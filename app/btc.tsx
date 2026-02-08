import { StyleSheet,Text,View } from "react-native";


export default function Btc(){
    return(
        <View style={styles.container}>
            <Text>Btc</Text>
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