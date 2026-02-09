import { StyleSheet,Text,TextInput,View,TouchableOpacity, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home(){

    const router = useRouter();

    return(
        <View style={s.container}>

                <TouchableOpacity
                    onPress={()=>
                        router.push("/usd")
                        }
                    style={s.btnUsd}
                        >
                    <Text>Ir para USD/BRL</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => 
                        router.push("/eur")
                    }
                >
                    <Text>Ir para EUR/BRL</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => 
                        router.push("/btc")
                    }
                    >
                    <View>Ir para BTC/BRL</View>    
                </TouchableOpacity>

               
            
        </View>
    )
        

}

const s = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
btnUsd: {
    backgroundColor: '#333'
}
    
})