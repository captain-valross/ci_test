export const returnZero = () => {
	const date = new Date();
	return date.getMinutes() % 2;
};
