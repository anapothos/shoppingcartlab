import waste from '../data/waste.js';
import renderWaste from './render-waste.js';

const list = document.getElementById('waste');

for(let i = 0; i < waste.length; i++) {
    const waste = waste[i];
    const dom = renderWaste(waste);
    list.appendChild(dom);
}