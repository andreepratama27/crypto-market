import { useEffect, useRef, useState } from "react";

const useTicker = () => {
	const ws = useRef<WebSocket>();
	const [ticker, setTicker] = useState();

	useEffect(() => {
		const newChannel = "chart:tick-btcidr";
		ws.current = new WebSocket("wss://ws3.indodax.com/ws/");

		ws.current.onopen = (e) => {
			ws.current?.send(
				JSON.stringify({
					params: {
						token:
							"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5NDY2MTg0MTV9.UR1lBM6Eqh0yWz-PVirw1uPCxe60FdchR8eNVdsskeo",
					},
					id: 1,
				}),
			);

			ws.current?.send(
				JSON.stringify({
					method: 1,
					params: {
						channel: newChannel,
					},
					id: 2,
				}),
			);
		};

		ws.current.onmessage = (event) => {
			const data = JSON.parse(event.data);
			const ticks = data?.result?.data?.data || [];

			if (ticks.length) {
				const middlePrice = ticks[ticks.length - 1][2];
				setTicker(middlePrice);
			}
		};

		const wsCurrent = ws.current;

		return () => {
			wsCurrent.close();
		};
	}, []);

	return {
		ticker,
	};
};

export default useTicker;
