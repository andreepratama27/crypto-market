const indodaxBaseUrl = "https://indodax.com";
const indodaxWsUrl = "wss://ws3.indodax.com/ws";

const urlSupportedCurrencies = `${indodaxBaseUrl}/api/pairs`;
const urlHistoryChart = `${indodaxBaseUrl}/tradingview/history_v2`;
const urlTickerCurrency = `${indodaxBaseUrl}/api/ticker`;

export {
	indodaxBaseUrl,
	indodaxWsUrl,
	urlSupportedCurrencies,
	urlHistoryChart,
	urlTickerCurrency,
};
