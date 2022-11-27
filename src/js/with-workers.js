import { defaultNumbers } from "./helper";

const worker = new Worker(new URL('./worker.js', import.meta.url), {type: 'module'});

const inputNumbers = document.getElementById('wInputNumbers');
const titleNumbers = document.getElementById('wTitleNumbers');
const calculateBtn = document.getElementById('wCalculateBtn');
const resultBox = document.getElementById('wResult');

inputNumbers.value = defaultNumbers;
titleNumbers.innerHTML = defaultNumbers;

inputNumbers.addEventListener('input', ({ target }) => {
	titleNumbers.innerHTML = target.value || '0';
});

worker.onmessage = ({ data }) => {
	resultBox.innerHTML = data.message;
}

calculateBtn.addEventListener('click', () => {
	worker.postMessage(inputNumbers.value);
});
