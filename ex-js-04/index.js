const formatDate = (date = new Date()) => {
	const days = date.getDate();
	// index comienza en 0
	const months = date.getMonth() + 1;
	const years = date.getFullYear();
	return `${days}/${months}/${years}`;
};

console.log(formatDate());
