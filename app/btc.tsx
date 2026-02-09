import { StyleSheet,Text,View } from "react-native";
import { getBtc } from "../services/moedas";
import { useEffect, useState } from "react";


export default function Eur(){
    const [valorBtc,setValorBtc] = useState<number>(0);

    useEffect(()=>{

        async function carregar(){
            try{
                const valor = await getBtc();
                setValorBtc(valor);
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
                <Text style={styles.valor}>BTC:{valorBtc.toFixed(2)}</Text>
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