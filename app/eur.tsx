import { StyleSheet,Text,View } from "react-native";
import { getEur } from "../services/moedas";
import { useEffect, useState } from "react";


export default function Eur(){
    const [valorEur,setValorEur] = useState<number>(0);

    useEffect(()=>{

        async function carregar(){
            try{
                const valor = await getEur();
                setValorEur(valor);
            }catch (error:any){
                console.log("ERRO NA REQUISIÇÃO:", error.message);
                if(error.response){
                    console.log("STATUS DO ERRO:", error.response.status);
                }
            }
        }
        carregar();
    },[]);

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.valor}>EUR:{valorEur.toFixed(2)}</Text>
            </View>
        </View>
    )
        
    
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
valor:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
}

})