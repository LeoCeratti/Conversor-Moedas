import { StyleSheet, Text,TextInput, TouchableOpacity,  View } from "react-native";
import { getBtc } from "../services/moedas";
import { useEffect, useState } from "react";


export default function Eur(){
    const [valorBtc,setValorBtc] = useState<number>(0);
    const [valor, setValor] = useState<string>('');
    const [resultado, setResultado] = useState<string>('');
    const [placeholder, setPlaceholder] = useState('Digite o Valor em Bitcoin');

    function converter(): void{

        if(isNaN(Number(valor)) || valor === ''){
            setResultado('--.--');
            return;
        }

        const convertido = Number(valor) * valorBtc;
        setResultado(convertido.toFixed(2));

    }
    function limpar():void{
        setValor('');
        setResultado('');
    }
    useEffect(()=>{

        async function carregar(){
            try{
                const valor = await getBtc();
                setValorBtc(Number(valor.toFixed(2)));
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
                                <Text style={styles.texto}>Conversor BTC → BRL</Text>
                                <Text style={styles.subtexto}>1 BTC equivale a R${valorBtc.toFixed(2)}</Text>                
                            </View>
                            <View>
                                <TextInput
                                    placeholder={placeholder}
                                    value={valor}
                                    onChangeText={setValor}
                                    keyboardType="numeric"
                                    style={styles.input}
                                    onFocus={() => setPlaceholder('')}
                                    onBlur={() => setPlaceholder('Digite o Valor em Dólar')}
                                />
                                <TouchableOpacity
                                    onPress={converter}
                                    style={styles.btn}
                                >
                                    <Text style={styles.btnText}>Converter</Text>
                                </TouchableOpacity>  
                
                                <TouchableOpacity
                                    onPress={limpar}
                                    style={styles.btnLimpar}
                                >
                                    <Text style={styles.btnLimparTexto}>Limpar</Text>
                                </TouchableOpacity>
                
                            </View>
                            <View>
                                {resultado && (
                                    <Text style={styles.resultado}>
                                        Resultado: R$ {resultado}
                                     </Text>
                      )}
                            </View>
                        </View>
    )
        
    
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2933',
    marginBottom: 10,
    
  },

  subtexto: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    width: 240,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },

  btn: {
    backgroundColor: '#16A34A',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    width: 240,
    marginBottom: 10
  },

  btnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

  resultado: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  btnLimpar:{
    width: 240,
    backgroundColor: '#D1D6DB',
    padding:12,
    borderRadius:12,
    alignItems:'center'

  },
  btnLimparTexto:{
    color: '#11187',
    fontSize: 14,
    fontWeight: '500'
  }

})