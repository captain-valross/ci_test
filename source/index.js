export const returnZero = () => {
	const date = new Date();
	return date.getMinutes() % 2;
};

console.log('This is zero:', returnZero());
