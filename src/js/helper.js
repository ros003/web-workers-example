export const generateColor = () => {
	const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
	let code = "";
	for(let i=0; i<6; i++){
		code += hexArray[Math.floor(Math.random()*16)];
	}
	return `#${code}`
}

export const sumNumbers = (data) => {
	console.time('Time');

	let sum = 0;

	for(let i = 0; i < data; i++) {
		sum += i;
	}

	console.timeEnd('Time');

	return sum;
}

export const defaultNumbers = '100000000';
