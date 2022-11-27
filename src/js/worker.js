import {sumNumbers} from "./helper";

postMessage({
	type: 'info',
	message: 'Web worker running',
});

addEventListener('message', ({ data }) => {
	postMessage({
		type: 'info',
		message: 'Calculating...',
	});

	const result = sumNumbers(data);

	postMessage({
		type: 'result',
		message: result,
	});
});
