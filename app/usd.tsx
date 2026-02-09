import { StyleSheet, Text, View } from "react-native";
import { getUsd } from "../services/moedas";
import { useEffect, useState } from "react";

export default function Usd() {
    const [valorUsd, setValorUsd] = useState<number>(0);

    useEffect(() => {
        async function carregar() {           
            try {
                const valor = await getUsd();               
                setValorUsd(valor);
            } catch (error: any) {
                console.log("ERRO NA REQUISIÇÃO:", error.message);
                if (error.response) {
                    console.log("STATUS DO ERRO:", error.response.status);
                }
            } 
        }
        carregar();
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.texto}>Faça a Conversão de USD para BRL</Text>
                <Text style={styles.valor}>USD: {valorUsd.toFixed(2)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    texto: {
        fontSize: 16,
    },
    valor: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});