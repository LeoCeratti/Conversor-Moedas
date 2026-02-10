import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Converta Moedas em Tempo Real
      </Text>

      {/* USD */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/usd")}
      >
        <View style={styles.linha}>
          <Text style={styles.nomeMoeda}>Dólar</Text>
          <Text style={styles.sigla}>USD → BRL</Text>
        </View>
      </TouchableOpacity>

      {/* EUR */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/eur")}
      >
        <View style={styles.linha}>
          <Text style={styles.nomeMoeda}>Euro</Text>
          <Text style={styles.sigla}>EUR → BRL</Text>
        </View>
      </TouchableOpacity>

      {/* BTC */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/btc")}
      >
        <View style={styles.linha}>
          <Text style={styles.nomeMoeda}>Bitcoin</Text>
          <Text style={styles.sigla}>BTC → BRL</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    padding: 25,
    justifyContent: "center",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#111827",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 14,
    marginBottom: 18,
    elevation: 4,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nomeMoeda: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },

  sigla: {
    fontSize: 14,
    color: "#6B7280",
  },
});
