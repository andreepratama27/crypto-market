import { createStore } from "zustand";

interface Order {
	symbol: string;
	logo: string;
	amount: number;
	type: string;
}

interface State {
	orders: Order[];
}

interface Action {
	setOrder: (order: Order) => void;
}

const orderStore = createStore<State & Action>()((set) => ({
	orders: [],
	setOrder(item) {
		set((state) => ({
			...state,
			orders: [...state.orders, item],
		}));
	},
}));

export default orderStore;
