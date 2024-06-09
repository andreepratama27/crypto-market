import axios from "@/libs/axios";
import { Currency, Ticker } from "@/stores/currency.store";

const getCurrencies = async (): Promise<Currency[]> => {
	try {
		const response = await axios.get("/api/pairs");
		return response.data;
	} catch (error) {
		// biome-ignore lint/complexity/noUselessCatch: <explanation>
		throw error;
	}
};

const getTicker = async (symbol: string): Promise<Ticker> => {
	try {
		const response = await axios.get(`/api/ticker/${symbol}`)
		return response.data
	} catch (error) {
		throw error
	}
}

export { getCurrencies, getTicker };
