const formatCurrency = (value: number) => {
	if (!value) return 'Rp 0'

	return Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
	}).format(value);
};

export { formatCurrency };
