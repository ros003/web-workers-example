import { defaultNumbers, sumNumbers } from "./helper";

const inputNumbers = document.getElementById('mInputNumbers');
const titleNumbers = document.getElementById('mTitleNumbers');
const calculateBtn = document.getElementById('mCalculateBtn');
const resultBox = document.getElementById('mResult');

inputNumbers.value = defaultNumbers;
titleNumbers.innerHTML = defaultNumbers;

inputNumbers.addEventListener('input', ({ target }) => {
	titleNumbers.innerHTML = target.value || '0';
});

calculateBtn.addEventListener('click', () => {
	resultBox.innerHTML = sumNumbers(inputNumbers.value);
});
