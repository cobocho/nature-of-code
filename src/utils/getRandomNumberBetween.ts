export const getRandomNumber = (
	min: number,
	max: number,
	isDecimal: boolean = false,
) => {
	const random = Math.random() * (max - min + 1) + min;

	return isDecimal ? random : Math.floor(random);
};
