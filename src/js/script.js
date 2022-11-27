import './with-workers';
import './without-workers';
import { generateColor } from "./helper";

const backgroundBtn = document.getElementById('backgroundBtn');

backgroundBtn.addEventListener('click', () => {
	document.body.style.background = generateColor();
});
