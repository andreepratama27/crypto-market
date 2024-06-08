const formatCurrency = (value: number) => {
	return Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
	}).format(value);
};

export { formatCurrency };
