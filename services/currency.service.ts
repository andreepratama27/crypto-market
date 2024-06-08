import axios from "@/libs/axios";

const getCurrencies = async () => {
	try {
		const response = await axios.get("/api/pairs");
		return response.data;
	} catch (error) {
		// biome-ignore lint/complexity/noUselessCatch: <explanation>
		throw error;
	}
};

export { getCurrencies };
