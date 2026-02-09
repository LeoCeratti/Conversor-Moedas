import { StyleSheet,Text,View,TouchableOpacity, Button } from "react-native";
import { useRouter } from "expo-router";


export default function Home(){

    const router = useRouter();

    return(
        <View style={styles.container}>

                <Button

                    title='Ir para USD/BRL'
                    onPress={() => 
                        router.push("/usd")
                    }
                
                />
                <Button
                    title='Ir para EUR/BRL'
                    onPress={() => 
                        router.push("/eur")
                    }
                />
                <Button
                    title='Ir para BTC/BRL'
                    onPress={() => 
                        router.push("/btc")
                    }
                />
            
        </View>
    )
        

}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},

})