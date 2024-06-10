import { createStore } from "zustand";

export interface Currency {
	id: string;
	symbol: string;
	base_currency: string;
	traded_currency: string;
	traded_currency_unit: string;
	description: string;
	ticker_id: string;
	volume_precision: number;
	price_precision: number;
	price_round: number;
	pricescale: number;
	trade_min_base_currency: number;
	trade_min_traded_currency: number;
	has_memo: boolean;
	memo_name: boolean;
	trade_fee_percent: number;
	trade_fee_percent_taker: number;
	trade_fee_percent_maker: number;
	url_logo: string;
	url_logo_png: string;
	is_maintenance: number;
	is_market_suspended: number;
	coingecko_id: number;
	cmc_id: number;
}

export interface Ticker {
	last: string;
	buy: string;
	sell: string;
	high: string;
	low: string;
	server_time: string;
	median?: string;
}

interface State {
	currencies: Currency[];
	currency: Currency | null;
	ticker: Ticker | null;
}

interface Action {
	initCurrencies: (currencies: Currency[]) => void;
	setCurrency: (currency: Currency) => void;
	setTicker: (ticker: Ticker) => void;
}

const currencyStore = createStore<State & Action>()((set) => ({
	currency: null,
	ticker: null,
	currencies: [],

	initCurrencies(item) {
		set((state) => ({
			...state,
			currencies: item,
		}));
	},

	setCurrency(item) {
		set((state) => ({
			...state,
			currency: item,
		}));
	},

	setTicker(item) {
		set((state) => ({
			...state,
			ticker: item,
		}));
	},
}));

export default currencyStore;
