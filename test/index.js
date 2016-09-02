import 'babel-polyfill';
import ctrl from '../';

const input = document.createElement('input');
input.type = 'button';
input.value = 'compensate: true';
input.addEventListener('click', (e)=>{
	ctrl.toggle();
	input.value = `compensate: ${ctrl.status}`;
}, false);

document.body.appendChild(input);
