import api from "./api";

export async function getUsd() {
    try {
        const response = await api.get("/last/USD-BRL");
        return Number(response.data.USDBRL.bid);
    } catch (error) {
        throw error;
    }
}

// export async function getEur() {
//   const response = await api.get("/last/EUR-BRL");
//   return Number(response.data.EURBRL.bid);
// }

// export async function getBtc() {
//   const response = await api.get("/last/BTC-BRL");
//   return Number(response.data.BTCBRL.bid);
// }
